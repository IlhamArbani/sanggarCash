// import React, {Component} from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { RNCamera } from 'react-native-camera';
// import { colors } from '../../utils';
// import {Input} from '../../components'

// class Scan extends Component {
//     state = {
//         barcodes: [],
//     }
//     barcodeRecognized = ({ barcodes }) => this.setState({ barcodes });

//     renderBarcodes = () => (
//     <View>
//         {this.state.barcodes.map(this.renderBarcode)}
//     </View>
//     );

//     renderBarcode = ({bounds, data}) => (
//         <React.Fragment key={data+bounds.origin.x}>
//             <View style={{borderWidth:2,borderRadius:10,position:'absolute',borderColor:'#F00',justifyContent:'center',backgroundColor:'rgba(255, 255, 255, 0.9)',padding:10,...bounds.size,left:bounds.size.x,top:bounds.origin.y}}>
//                 <Text style={{color:'#F00',flex:1,position:'absolute',textAlign:'center',backgroundColor:'transparent'}}>{data}</Text>
//             </View>
//         </React.Fragment>
//     );

//     render(){
//         return (
//             <View style={{flex:1}}>
//                 <RNCamera ref={ref => {this.camera = ref;}}style={{flex: 1,width: '100%'}} onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
//                     {this.renderBarcodes()}
//                 </RNCamera>
//                 <View style={{height:240, backgroundColor:colors.white,borderTopRightRadius:20,borderTopRightRadius:20,padding:16}}>
//                     <Text style={{textAlign:'center'}}>Atau Menggunakan</Text>
//                     <Input label="No. Handphone"/>
//                 </View>
//             </View>
//         )
//     }
// }

// export default Scan

// const styles = StyleSheet.create({})

'use strict';

import React, { Component } from 'react';
// import { withNavigation } from 'react-navigation';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

class Scan extends Component {
  onSuccess = e => {
    // alert(e.data)
    this.props.navigation.navigate('Konfirmasi');
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        
        bottomContent={
          <Text style={{textAlign:'center',fontSize:18}}>Scan Qr until vibrating</Text>
        }
      />
    );
  }
}

export default Scan

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

AppRegistry.registerComponent('default', () => ScanScreen);