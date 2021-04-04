import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header,ListBarang,ListMitra } from '../../components'
import { colors } from '../../utils'

const Konfirmasi = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Konfirmasi" onPress={() => navigation.goBack()}/>
            <View style={styles.total}>
                <Text style={{fontSize:18}}>Total</Text>
                <Text style={{fontSize:24}}>Rp. 12345</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{marginLeft:16,fontSize:16}}>Detail Pembelian :</Text>
                <ListBarang jenis="lontong" harga="10000" jumlah="5"/>
                <ListBarang jenis="lontong" harga="10000" jumlah="5"/>
                <ListBarang jenis="lontong" harga="10000" jumlah="5"/>
                <ListBarang jenis="lontong" harga="10000" jumlah="5"/>
            </View>
            <View style={styles.content}>
                <ListMitra title="Saldo" type='saldo' width={24} height={24} desc="Rp. 12345"/>
                <View style={{marginBottom:20,marginHorizontal:16}}>
                    <Button title="Konfirmasi"/>
                </View>
            </View>
        </View>
    )
}

export default Konfirmasi

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white,
    },
    total:{
        alignItems:'center',
        marginTop:30
    },
    content:{
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:20,
        borderWidth:1,
        borderColor:'#eaeaea',
        paddingTop:14,
        justifyContent:'space-between',
        flex:1,
    },
})
