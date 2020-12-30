import React from 'react';
import {Picker,Text,TextInput, TouchableOpacity} from 'react-native';



import {StudentLoginController} from './StudentLoginController';

import Layout from '../../../Layout/Layout';

import {Body, BodyInner, Row, RowTop, RowBottom,Label, RowFooter, SaveButton} from './StudentLoginCss';

import LinearButton from '../../../Components/Buttons/LinearButton';

export default class StudentLoginScreen extends StudentLoginController {
    static navigationOptions = {
        headerShown: true,
        title:'Student Login',
        headerStyle:{
            backgroundColor:'#071E50'
        },
        headerTitleStyle:{
            color:'#ffffff',
            fontFamily:'Roboto',
            fontSize:15,
            textAlign:'center'
        },
        headerLeftContainerStyle:{
            backgroundColor:'#030F29'
        },
        headerBackTitleStyle:{
            color:'#ffffff'
        },
        headerTintColor:'#ffffff'

      };
	constructor(props){
        super(props);
       
       
    }//end constructor
    
	render() {
		return (
            <Layout isBack="true" title="Student LogIn" onBack={()=>this.props.navigation.goBack()}>
                <Body>
                    <BodyInner>
                   
                        <Row>
                            <RowTop>
                                <Label>Email or Phone Number :</Label>
                            </RowTop>
                            <RowBottom>
                                
                            </RowBottom>
                        </Row>
                        <Row>
                            <RowTop>
                                <Label>Password :</Label>
                            </RowTop>
                            <RowBottom>
                                
                            </RowBottom>
                        </Row>
                        <Row>
                            <LinearButton height="100%" width="50%" Caption="LogIn" onClick={()=>{
                                    this.props.navigation.navigate('StudentHome',{
                                Title:"StudentHome"});
                                }} />
                        </Row>
                    </BodyInner>
                   
                </Body>
            </Layout>
         
		);
	}
}
