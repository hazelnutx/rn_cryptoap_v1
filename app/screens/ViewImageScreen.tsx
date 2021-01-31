import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import colors from '../config/colors'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <Image
        resizeMode={'contain'}
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    top: 40,
    justifyContent: 'space-between',
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    right: 30,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ViewImageScreen
