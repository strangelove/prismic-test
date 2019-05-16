
import React from 'react'
import Quote from "./Quote";
import TextSection from './TextSection';

export default (slice: any) => {
  switch(slice.slice_type) {
    case "quote": return <Quote {...slice} />
    case "text_section": return <TextSection {...slice} />
  }
} 