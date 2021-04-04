import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcMoney, IconBag, IconHistory, IcPencil, IcSetting } from '../../../assests'
import { Button } from '../../atoms'

const ListProfile = ({label,onPress}) => {
    const Side = () => {
        if(label === 'Saldo'){
            return <Text style={{fontSize:14}}>Rp 123456</Text>
        }
        return <Button type="icon-only" onPress={onPress}/>
    }
    const Icon = () => {
        if(label === 'Saldo'){
            return <IcMoney/>
        }
        if(label === "Setting"){
            return <IcSetting/>
        }
        if(label === "Edit Profile"){
            return <IcPencil/>
        }
        return <IcMoney/>
    }
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={styles.icon}>
                    <Icon/>
                </View>
                <Text style={{fontSize:14}}>{label}</Text>
            </View>
            <Side/>
        </View>
    )
}

export default ListProfile

const styles = StyleSheet.create({
    icon:{
        width:28,
        height:28,
        marginRight:10
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:16,
        paddingHorizontal:16,
        marginTop:16
    }
})
