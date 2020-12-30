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
    Rect
} from 'react-native-svg';
import {Text} from 'react-native';


export default class PasswordIcon extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            <Svg width={(this.props.isTablet=="true"?80:50)} height={(this.props.isTablet=="true"?80:50)} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25" cy="25" r="25" fill="#4F34F3"/>
                <Rect x="14" y="20" width="23" height="17" fill="#ffffff"/>
                <Path d="M34 16.5C34 14.5109 33.1045 12.6032 31.5104 11.1967C29.9163 9.79018 27.7543 9 25.5 9C23.2457 9 21.0837 9.79018 19.4896 11.1967C17.8955 12.6032 17 14.5109 17 16.5H19.9752C19.9752 15.2071 20.5573 13.9672 21.5934 13.053C22.6295 12.1388 24.0347 11.6252 25.5 11.6252C26.9653 11.6252 28.3705 12.1388 29.4066 13.053C30.4427 13.9672 31.0248 15.2071 31.0248 16.5H34Z" fill="#ffffff"/>
                <Rect x="17" y="16" width="17" height="13" fill="#ffffff"/>
                <Rect x="20" y="16" width="11" height="4" fill="#4F34F3"/>
                <Line x1="19" y1="25" x2="32" y2="25" stroke="#C4C4C4" stroke-width="2"/>
                <Line x1="19" y1="29" x2="32" y2="29" stroke="#C4C4C4" stroke-width="2"/>
                <Line x1="19" y1="33" x2="32" y2="33" stroke="#C4C4C4" stroke-width="2"/>
                <Circle cx="17.5" cy="36.5" r="7.5" fill="#4F34F3"/>
                <Circle cx="18" cy="36" r="5" fill="#C76C77"/>
            </Svg>




  	
		);
	}
}