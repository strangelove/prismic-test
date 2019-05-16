import { NextContext } from 'next'
import Prismic from 'prismic-javascript'
import React from 'react'
import Post from '../components/Post'
import RichText from '../components/RichText'
import { Client } from '../helpers'
import DefaultLayout from '../layouts'

export default class extends React.Component<{ blogPost: any; slug: string }> {
  public static async getInitialProps({ req, query }: NextContext<{ slug: string }>) {
    try {
      if (req) {
        const blogPost = await Client({ req }).queryFirst(Prismic.Predicates.at('my.blog_post.uid', query.slug), {})
        return { blogPost, slug: query.slug }
      }
    } catch (e) {
      console.log(e)
    }
  }
  public render() {
    const { blogPost, slug } = this.props
    return (
      <DefaultLayout>
        <h1>blogPostPage</h1>
        <Post {...blogPost} />
      </DefaultLayout>
    )
  }
}
