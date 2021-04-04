import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcBackArrow } from '../../../assests'
import { Button } from '../../atoms'

const Header = ({title,onPress}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back" onPress={onPress}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingVertical:30,
        paddingHorizontal:16,
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#eaeaea'
    },
    text:{
        textAlign:'center',
        flex:1,
        fontSize:20
    }
})
