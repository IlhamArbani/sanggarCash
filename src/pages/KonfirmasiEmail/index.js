import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { ILLogin, LogoGreen } from '../../assests/ilustration';
import { Button, Gap, Input, Link } from '../../components';


const KonfirmasiEmail = () => {
    return (
        <ImageBackground source={ILLogin} style={styles.page}>
            <View style={{width:'80%'}}>
                <Text style={{textAlign:'center',fontSize:18}}>Masukkan nomer verifikasi yang telah</Text>
                <Text style={{textAlign:'center',fontSize:18}}>kami kirimkan ke email anda</Text>
                <Gap height={24}/>
                <Input label="Email Addres"/>
                <Gap height={24}/>
                <Button title="Kirim" onPress={() => navigation.replace('MainApp')}/>
            </View>
        </ImageBackground>
    )
}

export default KonfirmasiEmail

const styles = StyleSheet.create({
    page:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
