import React from 'react';
import {Picker,Text,TextInput, TouchableOpacity} from 'react-native';



import {ChooseLoginTypeController} from './ChooseLoginTypeController';

import Layout from '../../Layout/Layout';

import {Body, BodyInner, Row, RowLeft, RowRight, RowFooter, SaveButton} from './ChooseLoginTypeCss';

import LButton from '../../Components/Buttons/LButton';

export default class ChooseLoginTypeScreen extends ChooseLoginTypeController {
    static navigationOptions = {
        headerShown: true,
        title:'Choose Login Type',
        headerStyle:{
            backgroundColor:'#071E50'
        },
        headerTitleStyle:{
            color:'#ffffff',
            fontFamily:'Roboto',
            fontSize:15
        }
      };
	constructor(props){
        super(props);
       
       
    }//end constructor
    
	render() {
		return (
            <Layout isBack="false" title="Choose Login Type" onBack={()=>this.props.navigation.goBack()}>
                <Body>
                    <LButton width="85%" height="34%" Caption="Teacher LogIn" onClick={()=>{
                        this.props.navigation.navigate('StudentLoginScreen',{
                                Title:"StudentLoginScreen"});
                    }}></LButton>
                    <LButton width="85%" height="34%" Caption="Student Login" onClick={()=>{
                        this.props.navigation.navigate('StudentLoginScreen',{
                                Title:"StudentLoginScreen"});
                    }}></LButton>
                </Body>
            </Layout>
         
		);
	}
}
