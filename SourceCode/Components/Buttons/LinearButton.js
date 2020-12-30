/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
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
import {
    Image,
    Dimensions,
    Text,TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';

const MainView = styled.TouchableOpacity`
    height:${props=>props.height};
    width:${props=>props.width};
    justifyContent:center;
    alignItems:center;
    backgroundColor:#469DCF;
    borderRadius: 5px;
    borderWidth: 1px;
    borderColor: #469DCF;

`
const Container = styled.View`
    height:100%;
    width:100%;
    justifyContent:center;
    alignItems:center;
    position:absolute;
    flexDirection:row;
`
const BallonText = styled.Text`
    fontSize:${props=>props.fontSize};;
    color:#ffffff;
    fontWeight:bold;
    textAlign:center;
`
export default class LinearButton extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            
            <MainView  underlayColor="#DDDDDD" onPress={()=>{this.props.onClick()}}  height={this.props.height} width={this.props.width}>
           
               
                <Svg height="100%" width="100%" viewBox="0 0 138 30" preserveAspectRatio="xMidYMid slice"  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G clip-path="url(#clip0)">
                   
                    <G filter="url(#filter0_d)">
                    <Rect width="138" height="30" rx="5" fill="url(#paint0_linear)"/>
                    </G>
                    </G>
                    <Defs>
                    
                    <LinearGradient id="paint0_linear" x1="-3.46975e-07" y1="16.9397" x2="137.985" y2="18.7372" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#7DC0EB"/>
                    <Stop offset="1" stopColor="#94EDF9"/>
                    </LinearGradient>
                    <ClipPath id="clip0">
                    </ClipPath>
                    </Defs>
                </Svg>


                <Container>
                    <BallonText fontSize={(this.props.fontSize?this.props.fontSize:'20px')}>{this.props.Caption}</BallonText>
                </Container>
                
                
            </MainView>


		);
	}
}