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
    Ellipse
} from 'react-native-svg';
import {Text} from 'react-native';


export default class TransactionIcon extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            <Svg width={(this.props.isTablet=="true"?80:50)} height={(this.props.isTablet=="true"?80:50)} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25" cy="25" r="25" fill="#796CC7"/>
                <Circle cx="17.5" cy="20.5" r="8" stroke="#6BF5F5"/>
                <Path d="M16.5 21H23.5" stroke="#6BF5F5" strokeWidth="2"/>
                <Path d="M17.5 21.5L14.1138 15.4635" stroke="#6BF5F5" strokeWidth="2"/>
                <Line x1="23" y1="12.5" x2="35" y2="12.5" stroke="#6BF5F5"/>
                <Line x1="28" y1="17.5" x2="32" y2="17.5" stroke="#ffffff"/>
                <Line x1="27" y1="22.5" x2="32" y2="22.5" stroke="#ffffff"/>
                <Line x1="24" y1="27.5" x2="32" y2="27.5" stroke="#ffffff"/>
                <Line x1="20" y1="32.5" x2="32" y2="32.5" stroke="#ffffff"/>
                <Line x1="17" y1="36.5" x2="35" y2="36.5" stroke="#6BF5F5"/>
                <Line x1="35.5" y1="12" x2="35.5" y2="37" stroke="#6BF5F5"/>
                <Line x1="17.5" y1="30" x2="17.5" y2="37" stroke="#6BF5F5"/>
            </Svg>



  	
		);
	}
}