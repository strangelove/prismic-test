import * as React from 'react'
import { Reset, Typography } from './defaults'
import breakpoints from './variables/breakpoints'
import colors from './variables/colors'
import fonts from './variables/fonts'
import spacings from './variables/spacings'

export const Defaults = () => (
  <React.Fragment>
    <Reset />
    <Typography />
  </React.Fragment>
)

export interface StyleClosetTheme {
  breakpoints: { [key in keyof typeof breakpoints]: string }
  colors: { [key in keyof typeof colors]: string }
  fonts: { [key in keyof typeof fonts]: string }
  spacings: { [key in keyof typeof spacings]: string }
}

export const theme: StyleClosetTheme = {
  breakpoints,
  colors,
  fonts,
  spacings
}
