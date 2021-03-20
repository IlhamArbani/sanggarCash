import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IconOnly from './IconOnly'

const Button = ({title,onPress,type,icon}) => {
    if(type === 'icon-only'){
        return <IconOnly icon={icon}/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0bcad4',
        paddingVertical:10,
        borderRadius:10,
    },
    text:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        color:'white',
        fontFamily:'Nunito-SemiBold'
    }
})
