import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import { AntDesign } from '@expo/vector-icons';


const BottomField = () => {

    const [name, setName] = useState("Text here ...");

    return (
        <View style={styles.bottom}>
            <View>
                <TextInput style={styles.input} 
                onChangeText={(value) => setName(value)}
                value={name} />
                
            </View>
            <TouchableOpacity>
                <LinearGradient
                    colors={['#fe8c00','#f83600']}
                    style={styles.icons}
                    locations={[0.2,0.9]}
                >
                    <AntDesign name="heart" size={18} color="white" />
                </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <LinearGradient
                    colors={['#8E2DE2','#4A00E0']}
                    style={styles.icons}
                    locations={[0.2,0.9]}
                >
                    <AntDesign name="gift" size={18} color="white" />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default BottomField

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        width: 200,
        borderWidth: 1,
        borderRadius: 35,
        padding: 17,
        opacity: 0.5,
        backgroundColor: '#261C21',
        marginHorizontal: 5,
        color: '#fff'
    },
    bottom: {
        width: '90%',
        height: 80,
        position: 'absolute',
        bottom: 30,
        left: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
    icons:{
        backgroundColor: '#FF842D',
        borderRadius: 35,
        padding: 22,
        marginHorizontal: 5,
    },
})