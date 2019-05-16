import Prismic from 'prismic-javascript'
import { ApiOptions } from 'prismic-javascript/d.ts/Api'
import { DefaultClient } from 'prismic-javascript/d.ts/client'
import { Document } from 'prismic-javascript/d.ts/documents'
import { accessToken, apiEndpoint, ga_tag } from '../config.json'

declare global {
  interface Window {
    prismic: any
    gtag(config: string, gtag: string, page_location: object): void
  }
}

export const trackPageView = (url: string) => {
  try {
    window.gtag('config', ga_tag, {
      page_location: url,
    })
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}

let frontClient: DefaultClient

export const Client = ({ req }: ApiOptions): DefaultClient => {
  if (!req && frontClient) { return frontClient } // prevent generate new instance for client side since we don't need the refreshed request object.
  else {
    const options = {...(req ? {req} : {}), ...(accessToken ? {accessToken} : {})}
    return Prismic.client(apiEndpoint, options)
  }
}

export const linkResolver = (doc: Document) => {
  if (doc.type  ===  'homepage') { return  '/' }
  if (doc.type  ===  'product') { return `/products?uid=${doc.uid}` }
  else { return  '/' }
}
