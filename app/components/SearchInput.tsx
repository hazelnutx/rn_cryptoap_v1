import React from 'react'
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import PressableSearchIcon from './PressableSearchIcon'
import colors from '../config/colors'

const SearchInput = (props: any) => {
  const searchHandler = (data: any) => {
    props.searchData(data)
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          spellCheck={false}
          onChangeText={(text) => searchHandler(text)}
        />
        <PressableSearchIcon />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  search: {
    height: 35,
    paddingLeft: 10,
    width: 303,
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
})

export default SearchInput
