import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { DummyPromo } from '../../../assests'


const ListPromo = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.promo} source={DummyPromo}/>
        </View>
    )
}

export default ListPromo

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10
    },
    promo:{
        width:360,
        height:110,
        marginTop:16,
        borderWidth:1,
        borderColor:'#eaeaea',
        borderRadius:10
    }
})
