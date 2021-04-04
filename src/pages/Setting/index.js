import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Header } from '../../components'
import { colors } from '../../utils'

const Setting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Setting" onPress={() => navigation.goBack()}/>
            <View style={{justifyContent:'space-between',flex:1,paddingBottom:16}}>
                <View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16,marginTop:20}}>
                        <Text>Notifikasi</Text>
                        <Button type="switch"/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16,marginTop:20}}>
                        <Text>Akun Terhubung</Text>
                        <Button type="icon-only"/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16,marginTop:20}}>
                        <Text>Daftar Bank</Text>
                        <Button type="icon-only"/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16,marginTop:20}}>
                        <Text>Prioritas Berita</Text>
                        <Button type="icon-only"/>
                    </View>
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
