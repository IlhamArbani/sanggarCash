import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { IcMoney } from '../../../assests'
import { ILMitra, LogoGreen } from '../../../assests/ilustration'
import { colors } from '../../../utils'

const ListMitra = ({type,width,height,title,desc,rounded}) => {
    const Logo = () =>{
        if(type === 'mitra'){
            return <Image source={ILMitra} style={styles.picture(width,height,rounded)}/>
        }
        if(type === 'saldo'){
            return (
                <View style={styles.picture(width,height,rounded)}>
                    <IcMoney/>
                </View>
            )
        }
        return <Image source={ILMitra} style={styles.picture(width,height,rounded)}/>
    }
    return (
        <View style={styles.container}>
            <Logo/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{desc}</Text>
            </View> 
        </View>
    )
}

export default ListMitra

const styles = StyleSheet.create({
    picture: (width,height,rounded) => ({
        width:width,
        height:height,
        borderRadius: rounded == true ? 11 : 0,
        marginRight:16
    }),
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:'#eaeaea'
    },
    title:{
        fontSize:16
    },
    address:{
        fontSize:12,
        color: colors.text.secondary
    }
})
