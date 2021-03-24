import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};

export default App

// import React, {Component} from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { RNCamera } from 'react-native-camera';

// class App extends Component {
//     render(){
//         return (
//             <View style={{flex:1}}>
//                 <RNCamera ref={ref => {this.camera = ref;}}style={{flex: 1,width: '100%'}}>
//                 </RNCamera>
//             </View>
//         );
//     }
// }

// export default App

// const styles = StyleSheet.create({})
