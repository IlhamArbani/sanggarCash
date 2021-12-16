import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header, ListProfile } from '../../components'
import { colors } from '../../utils'

const Setting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Setting" onPress={() => navigation.goBack()}/>
            <View style={{justifyContent:'space-between',flex:1,paddingBottom:16}}>
                <View>
                    <ListProfile inPage='setting' label='Notifikasi' type='switch'/>
                    <ListProfile inPage='setting' label='Akun Terhubung'/>
                    <ListProfile inPage='setting' label='Daftar Bank'/>
                </View>
                <View style={{paddingHorizontal:16}}>
                    <Button title="Sign Out" onPress={() => navigation.replace('Login')}/>
                </View>
            </View>
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white
    }
})
