import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IcBell, IconProfile } from '../../../assests'

const UserDetail = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.content}>
                    <Text style={{fontSize:20}}>Hallo,</Text>
                    <Text  style={{fontSize:20}}>Ilham</Text>
                </View>
                <Text style={{fontSize:12}}>Bergabung sejak 28 Februari 2021</Text>
            </View>
            <View style={styles.iconPack}>
                <IcBell style={styles.icon}/>
                <View style={styles.icon}>
                    <IconProfile/>
                </View>
            </View>
        </View>
    )
}

export default UserDetail

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        paddingTop:16,
        paddingHorizontal:16,
    },
    content:{
        flexDirection:'row',
        marginBottom:3
    },
    icon:{
        width:38,
        height:38,
        marginLeft:12
    },
    iconPack:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})
