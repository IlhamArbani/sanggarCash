import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({label}) => {
    const Input = () =>{
        return label === 'Password' ? <TextInput secureTextEntry={true} style={styles.input}/> : <TextInput style={styles.input}/>
    }
    return (
        <View>
            <Text  style={styles.label}>{label}</Text>
            <Input/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#e9e9e9',
        borderRadius:10,
        backgroundColor:'white',
        padding:10
    },
    label:{
        fontSize:16,
        color:'#26704F',
        marginBottom:6,
    }
})
