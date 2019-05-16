import React from 'react'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs-custom'

const ContentSection = styled.section<{ sliceLabel: string }>`
  margin-bottom: 2rem;
  font-size: 20px;
  ${({ sliceLabel }) => sliceLabel === '2col' && `
    column-count: 2;
    column-gap: 40px;
    & > p:last-child {
      margin-bottom: 0;
    }
  `}
`

export default (slice: any) => (
  <ContentSection sliceLabel={slice.slice_label}>
    <RichText richText={slice.primary.rich_text} />
  </ContentSection>
)

