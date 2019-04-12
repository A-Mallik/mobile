import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import puzzle from '../assets/images/puzzle.png'
import logo from '../assets/images/LogoMakr_4YLA8M.png'
import { NavigationEvents } from 'react-navigation';
import ButtonCustom from '../components/Touch'
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
  
  }
});


export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  handlePress = () => {
    console.log("This will navigate later")
  }
  
  render() {
    
    return (
      
      <View style= {styles.container}>
      <Text>Let's Get Started!</Text>
      
      <Image style= {styles.logo}
        source={logo}
      />
      {/* To Do: Move button to its own component and style */}
   
      <Button
      title="Enter"
      
      buttonStyle={{backgroundColor: '#0078f9', width:300, height: 50,borderRadius:20}}
    />
      </View>

      
    );
  }  
}

