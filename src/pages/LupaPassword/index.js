import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { ILLogin, LogoGreen } from '../../assests/ilustration';
import { Button, Gap, Input, Link } from '../../components';


const LupaPassword = ({navigation}) => {
    return (
        <ImageBackground source={ILLogin} style={styles.page}>
            <View style={{width:'80%'}}>
                <Text style={{textAlign:'center',fontSize:20}}>Masukkan alamat email anda</Text>
                <Gap height={24}/>
                <Input label="Email Addres"/>
                <Gap height={24}/>
                <Button title="Kirim" onPress={() => navigation.navigate('KonfirmasiEmail')}/>
            </View>
        </ImageBackground>
    )
}

export default LupaPassword

const styles = StyleSheet.create({
    page:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
