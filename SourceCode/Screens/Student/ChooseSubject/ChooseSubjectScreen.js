import React from 'react';
import {Picker,Text,TextInput, TouchableOpacity} from 'react-native';

import{ Animated,
    Easing } from 'react-native';

import {ChooseSubjectController} from './ChooseSubjectController';

import Layout from '../../../Layout/Layout';

import {Body, BodyInner, Row, RowTop, RowBottom,Label, RowFooter, SaveButton} from './ChooseSubjectCss';

import LinearButton from '../../../Components/Buttons/LinearButton';

const config = {
    animation: 'timing',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };


export default class ChooseSubjectScreen extends ChooseSubjectController {
    static navigationOptions = {
        headerShown: false,
        title:'Choose Subject',
       
      };
	constructor(props){
        super(props);
       
       console.log(this.props.navigation);
    }//end constructor
    
	render() {
		return (
            <Layout isBack="true" isHeader="no"  title="Choose Subject" onBack={()=>this.props.navigation.goBack()}>
                <Body>
                    <BodyInner>
                   
                        
                        <Row>
                            <LinearButton fontSize="14px" height="100%" width="90%" Caption="EcE - 61015 Computer Networking" onClick={()=>{
                                    this.props.navigation.navigate('AttendanceScreen',{Title:"Check In"});
                                }} />
                        </Row>
                        <Row>
                            <LinearButton fontSize="14px" height="100%" width="90%" Caption="EcE -61011 Humanities and Social Science" onClick={()=>{
                                    this.props.navigation.navigate('AttendanceScreen',{Title:"Check Out"});
                                }} />
                        </Row>
                    </BodyInner>
                   
                </Body>
            </Layout>
         
		);
	}
}
