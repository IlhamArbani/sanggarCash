import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILHome } from '../../assests/ilustration'
import { ListMitra } from '../../components'
import { colors } from '../../utils'


const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHome} style={styles.background}>
                <View style={styles.mainText}>
                    <Text style={styles.title}>Saldo Anda</Text>
                    <Text style={styles.saldo}>Rp 1,345.00</Text>
                </View>
            </ImageBackground>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Mitra Kami</Text>
                <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
                <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
                <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    },
    background:{
        height:240,
        alignItems:'center',
        justifyContent:'center',
    },
    content:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-20,
        borderWidth:1,
        borderColor:'#eaeaea',
        paddingTop:14
    },
    mainText:{paddingBottom:20},
    title:{
        fontSize:16,
    },
    saldo:{
        fontSize:32,
    },
    contentTitle:{
        fontSize:24,
        textAlign:'center',
        marginBottom:10
    }
})
