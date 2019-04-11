import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import puzzle from '../assets/images/puzzle.png'

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
      <Text>Connect with your Potential</Text>
      <Image style= {styles.logo}
        source={puzzle}
      />
      {/* To Do: Move button to its own component and style */}
      <Button 
      title="Enter Now" 
      onPress= {this.handlePress} />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 300,
    height: 260,
  },
  
});
