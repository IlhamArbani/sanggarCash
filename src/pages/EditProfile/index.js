import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { IcAddPhoto, IcPencil, ILProfile } from '../../assests'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils'

const EditProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()}/>
            <View style={styles.wraper}>
                    <Image source={ILProfile} style={styles.avatar}/>
                    <IcAddPhoto style={styles.icon}/>
            </View>
            <View style={styles.container}>
                <Input label="Full Name"/>
                <Gap height={24}/>
                <Input label="Email Addres"/>
                <Gap height={24}/>
                <Input label="Password"/>
                <Gap height={24}/>
                <Input label="No HP"/>
                <Gap height={24}/>
                <Button title="Save" onPress={() => navigation.replace('MainApp')}/>
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white,
        alignItems:'center'
    },
    container:{
        display:'flex',
        width:'80%',
        marginTop:20
    },
    avatar:{
        width:110,
        height:110
    },
    wraper:{
        width:130,
        height:130,
        borderWidth:1,
        borderColor:'#eaeaea',
        borderRadius:130/2,
        alignItems:'center',
        justifyContent:'center',
        marginTop:34
    },
    icon:{
        position:'absolute',
        bottom:8,
        right:6
    },
})
