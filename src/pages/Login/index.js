import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILLogin, LogoGreen } from '../../assests/ilustration'
import { Button, Gap, Input, Link } from '../../components'

const Login = ({navigation}) => {
    return (
        <ImageBackground source={ILLogin} style={styles.page}>
            <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={LogoGreen}/>
            </View>
            <View style={{marginTop:34}}>
                <Input label="Email Addres"/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={24}/>
                <Button title="Sign In" onPress={() => navigation.replace('MainApp')}/>
                <Gap height={30}/>
                <Link onPress={() => navigation.navigate('LupaPassword')} title="Forget Password?" size={14} align="center"/>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
                    <Text style={{fontSize:14,color:'#707070',marginRight:3}}>Don't have account?</Text>
                    <Link title="Sign up now" size={14} onPress={() => navigation.navigate('SignUp')}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    page:{
        padding: 40,
        flex:1,
    },
    image:{
        width:187,
        height:130,
        marginTop:105
    }
})
