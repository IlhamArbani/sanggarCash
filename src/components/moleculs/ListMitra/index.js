import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { ILMitra } from '../../../assests/ilustration'
import { colors } from '../../../utils'

const ListMitra = () => {
    return (
        <View style={styles.container}>
            <Image source={ILMitra} style={styles.picture}/>
            <View>
                <Text style={styles.title}>Resto Gori M</Text>
                <Text style={styles.address}>Jln. Kenangan Bersamanya</Text>
            </View> 
        </View>
    )
}

export default ListMitra

const styles = StyleSheet.create({
    picture:{
        width:80,
        height:60,
        borderRadius:11,
        marginRight:16
    },
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
