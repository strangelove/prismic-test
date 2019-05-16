import { NextContext } from 'next'
import { Link, RichTextRenderer } from 'prismic-reactjs-custom'
import React from 'react'
import styled from 'styled-components'
import { Client, linkResolver } from '../helpers'
import Slices from '../components/slices'
import Header from '../components/Header';

const Container = styled.div`
  max-width: 980px;
  margin: auto;
`

const BannerContent = styled(Container)`
  text-align: center;
`

const HomePageBanner = styled.div<{ src: string }>`
  margin: -70px 0 80px;
  padding: 10em 0 8em;
  background-position: center center;
  background-size: cover;
  color: #ffffff;
  line-height: 1.75;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${({ src }) => src });
`

const BannerTitle = styled.h2`
  color: #ffffff;
  font-size: 70px;
  font-weight: 900;
  line-height: 70px;
  width: 90%;
  max-width: 490px;
  margin-left: auto;
  margin-right: auto;
`

const BannerDescription = styled.p`
  width: 90%;
  max-width: 490px;
  margin-left: auto;
  margin-right: auto;
`

const BannerButton = styled.a`
  background: #ffffff;
  border-radius: 7px;
  color: #484D52;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 40px;
  &:hover {
    background: #c8c9cb;
  }
`

export default class extends React.Component<{ home: any }> {
  public static async getInitialProps({ req }: NextContext) {
    try {
      if (req) {
        const home = await Client({ req }).getSingle('homepage', {})
        return { home }
      }
    } catch (e) {
      console.log(e)
    }
  }
  public render() {
    const { home } = this.props
    const [ banner ] = home.data.homepage_banner
    const buttonLink = Link.url(banner.button_link, linkResolver)
    return (
      <React.Fragment>
        <Header />
        <HomePageBanner src={banner.image.url}>
          <BannerContent>
            <BannerTitle>{RichTextRenderer.asText(banner.title)}</BannerTitle>
            <BannerDescription>{RichTextRenderer.asText(banner.tagline)}</BannerDescription>
            {buttonLink && <BannerButton href={buttonLink}>{RichTextRenderer.asText(banner.button_label)}</BannerButton>}
          </BannerContent>
        </HomePageBanner>
        {home.data.page_content.map(Slices)}
      </React.Fragment>
    )
  }
}
