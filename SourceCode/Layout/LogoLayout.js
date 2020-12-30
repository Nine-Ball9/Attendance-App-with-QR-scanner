import React from 'react';

import { View, StyleSheet, Image,Text } from 'react-native';
//import {Picker,Text,Dimensions,TextInput, TouchableOpacity} from 'react-native';

import {BodyLogo,LogoContainer,LogoTextContainer,LogoBreakContainer,
    BodyContent, Footer, CustomButton} from './LogoLayoutCss'
import Logo from "./../Components/Logo";
import LogoBreak from "./../Components/LogoBreak";
import BacIcon from "./../Components/Icons/BacIcon"
  /*
import BacIcon from "./../Components/Icons/BacIcon"

import Svg,{
	Path,
    Circle,
    Line,
    Ellipse,
    G,
    Defs,
    Filter,
    ClipPath,
    FeFlood,
    FeColorMatrix,
    FeOffset,
    FeGaussianBlur,
    FeBlend,
    RadialGradient,
    Stop,
    Rect,
    SvgXml,
    LinearGradient

} from 'react-native-svg';
*/
export default class LogoLayout extends React.Component {

	constructor(props){
        super(props);
       
    }//end constructor
    
	render() {
       
		return (
            
            <BodyLogo>
                <LogoContainer>
                    <Logo></Logo>
                </LogoContainer>
                <LogoTextContainer>
                    <Text style={{color:'#071E50',fontSize:18,fontFamily:'Roboto',fontWeight:'bold'}}>Technological University</Text>
                    <Text style={{color:'#071E50',fontSize:18,fontFamily:'Roboto',fontWeight:'bold'}}>( Hmawbi )</Text>
                    <Text style={{color:'#99BAEE',fontSize:15,fontFamily:'Roboto',fontWeight:'bold'}}>Student Attendance System</Text>
                </LogoTextContainer>
                <LogoBreakContainer>
                    <LogoBreak></LogoBreak>
                </LogoBreakContainer>
            </BodyLogo>
         
		);
	}
}