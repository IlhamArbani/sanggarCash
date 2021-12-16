import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBackArrow, IcNext, IcPlus } from '../../../assests'
import { colors } from '../../../utils'

const IconOnly = ({icon,onPress}) => {
    const Icon = () => {
        if(icon === 'back'){
            return <IcBackArrow/>
        }
        if(icon === 'plus'){
            return (
                <View style={styles.icon}>
                    <IcPlus/>
                </View>
            )
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

const styles = StyleSheet.create({
    icon:{backgroundColor:colors.primary,
        borderRadius:10,
        padding:5,
        width:28,
        height:28,
        marginLeft:10}
})
