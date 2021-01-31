import React from 'react'
import { createIntl } from '@formatjs/intl'
import { View, Text, StyleSheet } from 'react-native'
import ArrowDownIcon from '../assets/svg/ArrowDownIcon'

import colors from '../config/colors'
import axios from 'axios'

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
  priceChangeCardColor?: any
}

const CoinCard = ({
  id,
  rank,
  symbol,
  name,
  supply,
  maxSupply,
  marketCapUsd,
  volumeUsd24Hr,
  priceUsd,
  changePercent24Hr,
  vwap24Hr,
  explorer,
  priceChangeCardColor,
}: CoinCardProps) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const SI_PREFIXES = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]

  // https://stackoverflow.com/questions/10599933/convert-long-number-into-abbreviated-string-in-javascript-with-a-special-shortn
  const abbreviateNumber = (number: any) => {
    if (number === 0) return number

    let numberFixed

    const tier = SI_PREFIXES.filter((n) => number >= n.value).pop()
    if (tier) {
      numberFixed = (number / tier.value).toFixed(2)
    }
    return `${numberFixed}${tier?.symbol}`
  }

  const price = formatter.format(parseFloat(priceUsd))
  const marketCap = abbreviateNumber(parseFloat(marketCapUsd))
  const volume24 = abbreviateNumber(parseFloat(volumeUsd24Hr))

  return (
    <View
      style={[styles.container, { backgroundColor: priceChangeCardColor }]}
      key={id}
    >
      <View style={styles.titleContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.rank}>#{rank}</Text>
          <Text style={styles.coinName}>{name}</Text>
          <Text
            style={[
              styles.coinName,
              { color: colors.textTransparanteGray, marginLeft: 8 },
            ]}
          >
            {symbol}
          </Text>
        </View>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.price}>
          <Text style={styles.text}>Price</Text>
          <Text style={styles.text}>{price}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.text}>Market Cap</Text>
          <Text style={styles.text}>${marketCap}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.text}>Volume 24h</Text>
          <Text style={styles.text}>${volume24}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.text}>Change 24h</Text>
          <Text style={styles.text}>
            {parseFloat(changePercent24Hr).toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={styles.lowHighContainer}>
        <View style={styles.bottomTextCont}>
          {/* TODO: Need to calculate the low, high and avarage */}
          <Text style={styles.bottomText}>LOW</Text>
          <Text style={[styles.bottomText, { marginLeft: 3 }]}>$33,069.74</Text>
        </View>
        <View style={styles.bottomTextCont}>
          <Text style={styles.bottomText}>AVARAGE</Text>
          <Text style={[styles.bottomText, { marginLeft: 3 }]}>$33,069.74</Text>
        </View>
        <View style={styles.bottomTextCont}>
          <Text style={styles.bottomText}>HIGH</Text>
          <Text style={[styles.bottomText, { marginLeft: 3 }]}>$33,069.74</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 111,
    marginTop: 5,
    backgroundColor: colors.cardGray,
    marginBottom: 5,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rank: {
    color: colors.white,
    fontWeight: '600',
    left: 10,
  },
  coinName: {
    color: colors.white,
    left: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconContainer: {
    right: 5,
  },
  midContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  price: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
  lowHighContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomTextCont: {
    flexDirection: 'row',
  },
  bottomText: {
    color: colors.textTransparanteGray,
    fontSize: 10,
  },
})

export default CoinCard
