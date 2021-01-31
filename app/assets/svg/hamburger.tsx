import React from 'react'
import { Svg, Path } from 'react-native-svg'

const HamburgerIcon = () => {
  return (
    <Svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
      <Path
        d='M3.75 22.5H26.25V20H3.75V22.5ZM3.75 16.25H26.25V13.75H3.75V16.25ZM3.75 7.5V10H26.25V7.5H3.75Z'
        fill='#FC5C65'
      />
    </Svg>
  )
}

export default HamburgerIcon
