import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListTransaksi = () => {
    return (
        <View style={styles.container}>
            <View style={styles.date}>
                <Text style={{color:'white'}}>7</Text>
                <Text style={{color:'white'}}>Mar</Text>
            </View>
            <View style={styles.deskripsi}>
                <Text style={styles.jenis}>TopUp</Text>
                <Text style={styles.saldo}>+Rp 50.000</Text>
            </View>
        </View>
    )
}

export default ListTransaksi

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:'#eaeaea'
    },
    date:{
        backgroundColor:'#808080',
        borderRadius:100,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    deskripsi:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        alignItems:'center',
    },
    jenis:{
        paddingLeft:34,
        fontSize:18
    },
    saldo:{
        fontSize:16,
        color:'green'
    }
})
