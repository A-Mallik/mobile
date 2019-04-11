import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import testlogo from '../assets/images/testlogo.png'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style= {styles.container}>
      <Image style= {styles.logo}
        source={testlogo}
      />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 260,
  },
  
});
