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
    Text
} from 'react-native';
import styled from 'styled-components/native';

const MainView = styled.TouchableOpacity`
    height:${props=>props.height};
    width:${props=>props.width};
    justifyContent:center;
    alignItems:center;
    backgroundColor:#071E50;

`
const Container = styled.View`
    height:100%;
    width:100%;
    justifyContent:center;
    alignItems:center;
    position:absolute;
    flexDirection:row;
`
const ContainerLeft = styled.View`
    height:100%;
    width:40%;
    justifyContent:center;
    alignItems:center;
`
const ContainerRight = styled.View`
    height:100%;
    width:60%;
    justifyContent:center;
`
const BallonText = styled.Text`
    fontSize:20px;
    color:#071E50;
    fontWeight:bold;
`
export default class LButton extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            
            <MainView  underlayColor="#DDDDDD" onPress={()=>{this.props.onClick()}}  height={this.props.height} width={this.props.width}>
                <Svg height="100%" width="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 320 116" xmlns="http://www.w3.org/2000/svg">
                    <G clipPath="url(#clip0)">
                    <G filter="url(#filter0_d)">
                    <Rect width="320" height="116" fill="url(#paint0_linear)"/>
                    </G>
                    </G>
                    <Defs>
                        
                        <LinearGradient id="paint0_linear" x1="-8.0458e-07" y1="65.5" x2="320" y2="68" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#7DC0EB"/>
                        <Stop offset="1" stopColor="#94EDF9"/>
                        </LinearGradient>
                        <ClipPath id="clip0">
                        <Rect width="320" height="116" fill="white"/>
                        </ClipPath>
                    </Defs>
                </Svg>
                <Container>
                    <ContainerLeft>
                        <Svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="40" cy="40" r="39" fill="#C4C4C4" fillOpacity="0.05" stroke="white" strokeWidth="2"/>
                            <Ellipse cx="40" cy="30.5365" rx="14.6341" ry="14.6341" fill="#071E50"/>
                            <Path d="M65.6585 67.9025C63.9024 75.4635 48.0822 79.3172 39.9999 79.3172C31.9177 79.3172 16.5365 75.4635 14.439 68.7806C18.878 50.5855 29.9999 48.0977 39.9999 48.0977C55.1707 48.0977 59.9024 53.5611 65.6585 67.9025Z" fill="#382783"/>
                        </Svg>
                    </ContainerLeft>
                    <ContainerRight>
                        <BallonText>{this.props.Caption}</BallonText>
                    </ContainerRight>
                </Container>
                
                
            </MainView>


		);
	}
}