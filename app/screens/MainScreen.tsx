import React from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  FlatList,
} from 'react-native'

import 'intl'
import 'intl/locale-data/jsonp/en'

import PressableHamburgerIcon from '../components/PressableHamburgerIcon'
import SearchInput from '../components/SearchInput'

import colors from '../config/colors'
import CoinCard from '../components/CoinCard'
import axios from 'axios'
import PressableSearchIcon from '../components/PressableSearchIcon'

interface CoinCardProps {
  id: string
  rank: string
  symbol: string
  name: string
  supply?: string
  maxSupply?: string | null
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr?: string
  explorer?: string
}

export default function MainScreen() {
  const [data, setData] = React.useState<any>([])
  const [search, setSearch] = React.useState('')
  const [changeColor, setChangeColor] = React.useState({
    red: false,
    green: false,
  })
  const [isLoading, setIsLoading] = React.useState(false)

  // Coincap.io - API
  async function api() {
    try {
      await axios
        .get(`https://api.coincap.io/v2/assets?limit=50`)
        .then((res) => res.data.data)
        .then((resJson) => {
          setData(resJson)
          // setIsLoading(false)
        })
        .catch((err) => console.log('promise catch' + err.message + search))
    } catch (err) {
      console.error(err.message)
    }
  }

  React.useEffect(() => {
    // setIsLoading(true)
    api()
  }, [data])

  React.useEffect(() => {})

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.topContainer}>
        <PressableHamburgerIcon />
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          accessible={false}
        >
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.search}
              spellCheck={false}
              onChangeText={(text) => setSearch(text)}
              value={search}
            />
            <PressableSearchIcon />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        {data
          ? data.map((el: CoinCardProps) => {
              return (
                <CoinCard
                  key={el.id}
                  id={el.id}
                  rank={el.rank}
                  symbol={el.symbol}
                  name={el.name}
                  marketCapUsd={el.marketCapUsd}
                  volumeUsd24Hr={el.volumeUsd24Hr}
                  changePercent24Hr={el.changePercent24Hr}
                  priceUsd={el.priceUsd}
                  priceChangeCardColor={colors.cardGray}
                />
              )
            })
          : 'DATA'}
      </ScrollView>
    </View>
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
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  topContainer: {
    width: '100%',
    height: 60,
    backgroundColor: colors.cardGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginbtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  signupbtn: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
})
