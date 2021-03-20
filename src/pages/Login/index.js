import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILLogin } from '../../assests/ilustration'
import { Button, Gap, Input } from '../../components'

const Login = ({navigation}) => {
    return (
        <ImageBackground source={ILLogin} style={styles.page}>
            <View>
                <Input label="Email Addres"/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={24}/>
                <Button title="Login" onPress={() => navigation.replace('MainApp')}/>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        padding: 40,
        flex:1,
        justifyContent:'center'
    }
})
