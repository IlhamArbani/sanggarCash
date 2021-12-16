import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../../atoms'

const ListSetting = ({label,type,onPress}) => {
    const ButtonSetting = ()=> {
        if(type === 'switch'){
            return <Button type='switch'/>
        }
        return <Button type="icon-only" onPress={onPress}/>
    }
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <ButtonSetting/>
        </View>
    )
}

export default ListSetting

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
        marginTop:20
    }
})
