import React,{Component} from 'react';
import {Button} from 'react-native-elements'

export default class ButtonCustom  extends React.Component {

    constructor(props) {
        super(props)
      }
      render(){
        return (
          <Button 
          {...this.props} 
          backgroundColor={this.props.backgroundColor|| 'red' } /> 
          //this allows me to override that backgroundColor if i need to
        )
      }  


}