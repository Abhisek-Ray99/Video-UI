import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'

const comment = ({name, url, text}) => {
  return (
    <View style={styles.cmt}>
        <Image
            source={{uri: url}}
            style={styles.img}
        />
        <View style={styles.text}>
            <Text style={{color: '#fff', fontWeight: '700', }}>{name}</Text>
            <Text style={{color: '#fff', overflow : "hidden",flexShrink: 1}}>
                {text}
            </Text>
        </View>
    </View>
  )
}

export default comment

const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
        borderRadius: 35,
        borderColor: '#ffffff',
        borderWidth: 2,
        marginLeft: 14,
    },
    cmt:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    text: {
        backgroundColor: '#000',
        opacity: 0.5,
        width: '80%',
        height: 80,
        borderRadius: 7,
        padding: 4,
    }
})