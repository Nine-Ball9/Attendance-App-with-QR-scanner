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
    Line
} from 'react-native-svg';
import {Text} from 'react-native';


export default class ShareIcon extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            <Svg width={(this.props.isTablet=="true"?80:50)} height={(this.props.isTablet=="true"?80:50)} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25" cy="25" r="25" fill="#7A8898"/>
                <Line x1="15.2425" y1="27.0299" x2="31.2425" y2="31.0299" stroke="#6BF5F5" strokeWidth="2"/>
                <Line x1="14.4335" y1="27.176" x2="30.4335" y2="16.176" stroke="#6BF5F5" strokeWidth="2"/>
                <Circle cx="34" cy="32" r="4" fill="#7A8898" stroke="#6BF5F5" strokeWidth="2"/>
                <Circle cx="15" cy="27" r="4" fill="#7A8898" stroke="#6BF5F5" strokeWidth="2"/>
                <Circle cx="32" cy="17" r="4" fill="#7A8898" stroke="#6BF5F5" strokeWidth="2"/>
            </Svg>
  	
		);
	}
}