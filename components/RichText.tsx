import { RichText } from 'prismic-reactjs-custom'
import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
  list-style: circle;
`

const Image = styled.img`
  width: 80%;
  padding: 10%;
`

export default (props: any) => (
  <RichText
    {...props}
    listItem={ListItem}
    image={Image}
  />
)
