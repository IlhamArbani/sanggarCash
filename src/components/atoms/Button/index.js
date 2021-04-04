import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils'
import IconOnly from './IconOnly'
import SwitchBtn from './Switch'

const Button = ({title,onPress,type,icon}) => {
    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress}/>
    }
    if(type === 'switch'){
        return <SwitchBtn/>
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? '#eaeaea' : colors.primary,
        paddingVertical:10,
        borderRadius:10,
    }),
    text:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        color:'white',
        fontFamily:'Nunito-SemiBold'
    }
})
