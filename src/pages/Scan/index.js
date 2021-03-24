import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera';
import { colors } from '../../utils';
import {Input} from '../../components'

class Scan extends Component {
    state = {
        barcodes: [],
    }
    barcodeRecognized = ({ barcodes }) => this.setState({ barcodes });

    renderBarcodes = () => (
    <View>
        {this.state.barcodes.map(this.renderBarcode)}
    </View>
    );

    renderBarcode = ({bounds, data}) => (
        <React.Fragment key={data+bounds.origin.x}>
            <View style={{borderWidth:2,borderRadius:10,position:'absolute',borderColor:'#F00',justifyContent:'center',backgroundColor:'rgba(255, 255, 255, 0.9)',padding:10,...bounds.size,left:bounds.size.x,top:bounds.origin.y}}>
                <Text style={{color:'#F00',flex:1,position:'absolute',textAlign:'center',backgroundColor:'transparent'}}>{data}</Text>
            </View>
        </React.Fragment>
    );

    render(){
        return (
            <View style={{flex:1}}>
                <RNCamera ref={ref => {this.camera = ref;}}style={{flex: 1,width: '100%'}} onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
                    {this.renderBarcodes()}
                </RNCamera>
                <View style={{height:240, backgroundColor:colors.white,borderTopRightRadius:20,borderTopRightRadius:20,padding:16}}>
                    <Text style={{textAlign:'center'}}>Atau Menggunakan</Text>
                    <Input label="No. Handphone"/>
                </View>
            </View>
        )
    }
}

export default Scan

const styles = StyleSheet.create({})
