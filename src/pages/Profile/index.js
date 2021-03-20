import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyQr } from '../../assests'
import { ListProfile, UserDetail } from '../../components'

const Profile = () => {
    return (
        <View style={styles.container}>
            <UserDetail/>
            <View style={{alignItems:'center',marginBottom:16}}>
                <Image source={DummyQr} style={styles.picture}/>
                <Text style={{fontSize:18}}>08123456789</Text>
            </View>
            <View style={styles.menu}>
                <ListProfile label="Saldo"/>
                <ListProfile label="Riwayat Transaksi"/>
                <ListProfile label="Promo Berlangsung"/>
                <ListProfile label="Edit Profile"/>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    picture:{
        height:245,
        width:245,
        marginTop:16
    },
    menu:{
        backgroundColor:'white',
        flex:1,
    }
})
