import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { DummyPromo } from '../../assests'

const Tas = () => {
    return (
            <View style={styles.page}>
                    <Image style={styles.promo} source={DummyPromo}/>
                    <Image style={styles.promo} source={DummyPromo}/>
                    <Image style={styles.promo} source={DummyPromo}/>
                    <Image style={styles.promo} source={DummyPromo}/>
            </View>
    )
}

export default Tas

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:16
    },
    promo:{
        width:'100%',
        height:120,
        marginTop:16,
        borderWidth:1,
        borderColor:'#eaeaea'
    }
})

