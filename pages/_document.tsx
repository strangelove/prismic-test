import Document, { Main, NextDocumentContext, NextScript } from 'next/document'
import React from 'react'
import { apiEndpoint, ga_tag } from '../config.json'

export default class extends Document<{ isProduction: boolean }> {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const isProduction = process.env.NODE_ENV === 'production'
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, isProduction }
  }

  public setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ga_tag}');
      `,
    }
  }

  public setPrismic() {
    return {
      __html: `
        window.prismic = {
          endpoint: '${apiEndpoint}'
        };
      `,
    }
  }

  public render() {
    const { isProduction } = this.props
    return (
      <html>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga_tag}`}/>
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </>
          )}
          <script dangerouslySetInnerHTML={this.setPrismic()}/>
          <script type='text/javascript' src='https://static.cdn.prismic.io/prismic.min.js'></script>
        </body>
      </html>
    )
  }
}
