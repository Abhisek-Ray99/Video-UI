import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Views = ({url,index}) => {
  return (
    <View>
      <Image
        source={{ uri: url}}
        style={[styles.imgH, {
          marginLeft: index === 0 ? 0 : -14
        }]}
      />
    </View>
  )
}

export default Views

const styles = StyleSheet.create({
    imgH: {
        width: 30,
        height: 30,
        borderRadius: 35,
        borderColor: '#ffffff',
        borderWidth: 2,
    }
})