import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBackArrow, IcNext } from '../../../assests'

const IconOnly = ({icon,onPress}) => {
    const Icon = () => {
        if(icon === 'back'){
            return <IcBackArrow/>
        }
        return <IcNext/>
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
