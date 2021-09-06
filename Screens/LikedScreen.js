import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LikedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.likedTitle}>
          <Text>Liked</Text>
        </View>
      </View>
    </View>
  )
}

export default LikedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
