import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListBarang = ({jenis,harga,jumlah}) => {
    return (
        <View style={styles.container}>
            <Text>{jenis}</Text>
            <View style={styles.detail}>
                <Text style={{marginRight:10}}>Rp. {harga} x</Text>
                <Text>{jumlah}</Text>
            </View>
        </View>
    )
}

export default ListBarang

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:'#eaeaea',
        justifyContent:'space-between'
    },
    detail:{
        flexDirection:'row'
    }
})
