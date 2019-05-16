import { NextContext } from 'next'
import Prismic from 'prismic-javascript'
import React from 'react'
import styled from 'styled-components'
import Post from '../components/Post'
import { Client } from '../helpers'
import DefaultLayout from '../layouts'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default class extends React.Component<{ blogPosts: any }> {
  public static async getInitialProps({ req }: NextContext) {
    try {
      if (req) {
        const { results } = await Client({ req }).query(Prismic.Predicates.at('document.type', 'blog_post'), {})
        return { blogPosts: results }
      }
    } catch (e) {
      console.log(e)
    }
  }
  public render() {
    const { blogPosts } = this.props
    return (
      <DefaultLayout>
        <h1>Blog Posts</h1>
        <Container>
          {blogPosts.map(Post)}
        </Container>
      </DefaultLayout>
    )
  }
}
