import React from 'react'
import { StyleSheet,TouchableOpacity, View } from 'react-native'
import { IconBag, IconBagActive, IconHistory, IconHistoryActive, IconHome, IconHomeActive, IconProfile, IconQrCode } from '../../../assests/icon'
import { colors } from '../../../utils'

const TabItem = ({type,active, onPress, onLongPress,navigation}) => {
    const Icon = () => {
        if(type === 'Home'){
            return active ? <IconHomeActive/> : <IconHome/>;
        }
        if(type === 'History'){
            return active ? <IconHistoryActive/> : <IconHistory/>; 
        }
        if(type === 'Tas'){
            return active ? <IconBagActive/> : <IconBag/>;
        }
        if(type === 'Profile'){
            return <IconProfile/>;
        }
        return <IconHome/>
    }

    if(type === 'Pembayaran'){
        return(
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <IconQrCode/>
        </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
            <View style={styles.icon}>
                <Icon/>
            </View>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        zIndex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.primary,
        width:80,
        height:80,
        borderRadius:100,
        position:'absolute',
        bottom:25,
        left:155,
    },
    icon:{
        width:28,
        height:28
    }
})
