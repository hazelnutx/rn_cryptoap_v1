import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import HamburgerIcon from '../assets/svg/hamburger'

const PressableHamburgerIcon = () => {
  return (
    <Pressable onPress={() => console.log('Pressed Hamburger')}>
      <View style={styles.hamburgerButton}>
        <HamburgerIcon />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  hamburgerButton: {
    left: 5,
  },
})

export default PressableHamburgerIcon
