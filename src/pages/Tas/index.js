import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, ListMitra } from '../../components'

const Tas = () => {
    return (
            <View style={styles.page}>
                <ListMitra/>
                <ListMitra/>
                <ListMitra/>
            </View>
    )
}

export default Tas

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white'
    }
})

