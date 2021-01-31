import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import SearchIcon from '../assets/svg/SearchIcon'

const PressableHamburgerIcon = () => {
  return (
    <Pressable onPress={() => console.log('Pressed Hamburger')}>
      <View style={styles.searchButton}>
        <SearchIcon />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  searchButton: {
    right: 5,
  },
})

export default PressableHamburgerIcon
