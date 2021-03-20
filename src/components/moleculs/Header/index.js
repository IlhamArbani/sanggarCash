import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcBackArrow } from '../../../assests'

const Header = () => {
    return (
        <View style={styles.container}>
            <IcBackArrow/>
            <Text style={styles.text}>Riwayat Transaksi</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingVertical:30,
        paddingHorizontal:16,
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#eaeaea'
    },
    text:{
        textAlign:'center',
        flex:1,
        fontSize:20
    }
})
