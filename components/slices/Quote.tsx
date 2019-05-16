import React from 'react'
import styled from 'styled-components'
import { RichTextRenderer } from 'prismic-reactjs-custom'

const QuoteSection = styled.section`
  margin-bottom: 2rem;
  font-size: 20px;
`

export default (slice: any) => (
  <QuoteSection>
    <blockquote>{RichTextRenderer.asText(slice.primary.quote_text)}</blockquote>
  </QuoteSection>
)