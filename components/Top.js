import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import Views from './Views';

import {USERS} from '../data/data'

const Top = () => {
  return (
    <View style={styles.top}>
      <View style={{padding: 2, margin: 4}}>
        <TouchableOpacity style={styles.btn}>
            <Ionicons style={styles.icon} name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{padding: 2, margin: 4, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', margin: 6,}}>
          {USERS.map((user,index) => {
            if(index <= 3){
              return <Views key={user.userid} url={user.url} index={index} />
            }
          })}
        </View>
        <TouchableOpacity style={styles.btn}>
            <Entypo style={styles.icon} name="cross" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Top

const styles = StyleSheet.create({
    top: {
        width: '90%',
        height: 60,
        position: 'absolute',
        top: 55,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    btn: {
        borderRadius: 35,
        backgroundColor: 'black',
        opacity: 0.5
    },
    icon: {
        padding: 12,
        alignSelf: 'center',
    }
})