import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILHome, ILProfile } from '../../assests/ilustration'
import { Button, Gap, ListMitra, ListPromo } from '../../components'
import { colors } from '../../utils'


const Home = () => {
    return (
        <ScrollView vertical>
        <View style={styles.page}>
            <ImageBackground source={ILHome} style={styles.background}>
                <View style={styles.profile}>
                    <Image source={ILProfile} style={styles.avatar}/>
                    <Text>Ilham Arbani</Text>
                </View>
                <View style={styles.mainText}>
                    <View>
                        <Text style={styles.title}>Saldo Anda</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={styles.saldo}>Rp 1,345.00</Text>
                            <Button type='icon-only' icon="plus"/>
                        </View>
                    </View>
                </View>
            </ImageBackground>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Promo Terbaru</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:-16}}>
                        <View style={styles.promo}>
                            <Gap width={6}/>
                            <ListPromo/>
                            <ListPromo/>
                            <ListPromo/>
                            <Gap width={6}/>
                        </View>
                    </ScrollView>
                    <Text style={styles.contentTitle}>Mitra Kami</Text>
                    <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
                    <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
                    <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
                    <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
                    <ListMitra title="Resto Gori" desc="Jl. Kenangan Berasamanay" type="mitra" width={80} height={80} rounded={true}/>
                </View>
        </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
    },
    background:{
        height:240,
    },
    content:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-20,
        borderWidth:1,
        borderColor:'#eaeaea',
        paddingTop:14,
    },
    mainText:{
        paddingBottom:20,
        alignItems:'center'
    },
    title:{
        fontSize:16,
    },
    saldo:{
        fontSize:32,
    },
    contentTitle:{
        fontSize:14,
        marginBottom:10,
        fontWeight:'bold',
        paddingHorizontal:16,
        marginTop:16
    },
    promo:{
        flexDirection:'row'
    },
    avatar:{
        width:40,
        height:40,
        marginRight:16
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:16,
        marginLeft:16
    }
})
