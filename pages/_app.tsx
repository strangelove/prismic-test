import NextSeo from 'next-seo'
import App, { Container, NextAppContext } from 'next/app'
import Router from 'next/router'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { default_seo } from '../config.json'
import { trackPageView } from '../helpers'
import Typography from '../styles/defaults/typography'
import Reset from '../styles/defaults/reset'

export default class extends App {
  public static async getInitialProps(params: NextAppContext) {
    const { Component, ctx } = params
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url)
    }
  }

  public render() {
    const { Component, pageProps }: any = this.props
    return (
      <Container>
        <NextSeo config={default_seo} />
        <Reset />
        <Typography />
        <ThemeProvider theme={{ color: '#fff' }}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
