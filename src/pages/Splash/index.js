import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Login');
        },2000)
    },[])
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Sanggar Cash</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'600'
    }
})
