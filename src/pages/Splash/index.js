import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { LogoWhite } from '../../assests'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Login');
        },2000)
    },[])
    return (
        <View style={styles.page}>
            <Image style={styles.image} source={LogoWhite}/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        backgroundColor:'#26704F',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'600'
    },
    image:{
        width:311,
        height:216
    }
})
