import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, ListTransaksi } from '../../components'

const History = () => {
    return (
        <View style={styles.page}>
            <ListTransaksi/>
            <ListTransaksi/>
            <ListTransaksi/>
            <ListTransaksi/>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    }
})
