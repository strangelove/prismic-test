import React from 'react'
import { NextContext } from 'next'
import { Link, RichText } from 'prismic-reactjs'
import { Client, linkResolver } from '../helpers'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
`

export default class Header extends React.Component<{ menu: any; doc: any }> {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
      notFound: false
    }
    if (props.prismicCtx) {
      console.log(props)
    }
  }

  componentDidMount() {
    this.setState({ doc: this.props.menu })
  }

  menuLinks() {
    return this.state.doc.data.menu_links.map(menuLink => {
      return (
        <li key={menuLink.link.id}>
          <a href={Link.url(menuLink.link, linkResolver)}>
            {RichText.asText(menuLink.label)}
          </a>
        </li>
      )
    })
  }

  render() {
    if (this.state.doc) {
      return (
        <Container className="site-header">
          <a href="./">
            <div className="logo">Very Strange Love</div>
          </a>
          <nav>
            <ul>{this.menuLinks()}</ul>
          </nav>
        </Container>
      )
    } else {
      return null
    }
  }
}
