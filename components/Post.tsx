import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import RichText from './RichText'

const PostWrapper = styled.div`
  border: 1px solid #afafaf;
  border-radius: 5px;
  width: 80%;
  margin: 40px 0;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 20px 5px rgba(0,0,0,0.1);
  & > h3 {
    margin-bottom: 20px;
  }
`

export default (props: any) => (
  <PostWrapper key={props.id}>
    <h3>{props.data.title[0].text}</h3>
    <RichText richText={props.data.body} />
    <Link href={`/posts/${props.slugs[0]}`}><a>Read more</a></Link>
  </PostWrapper>
)
