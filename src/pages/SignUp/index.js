import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILLogin, LogoGreen } from '../../assests/ilustration'
import { Button, Gap, Input, Link } from '../../components'

const SignUp = ({navigation}) => {
    return (
        <ImageBackground source={ILLogin} style={styles.page}>
            <View style={{marginTop:34}}>
                <Input label="Full Name"/>
                <Gap height={24}/>
                <Input label="Email Addres"/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={24}/>
                <Input label="No HP"/>
                <Gap height={24}/>
                <Button title="Sign Up" onPress={() => navigation.replace('MainApp')}/>
                <Gap height={30}/>
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:5}}>
                    <Text style={{fontSize:14,color:'#707070',marginRight:3}}>Have account?</Text>
                    <Link title="Sign in" size={14}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page:{
        padding: 40,
        flex:1,
        justifyContent:'center'
    },
    image:{
        width:187,
        height:130,
        marginTop:105
    }
})
