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


export default class ReportIcon extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            <Svg width={(this.props.isTablet=="true"?80:50)} height={(this.props.isTablet=="true"?80:50)} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25" cy="25" r="25" fill="#3B9E45"/>
                <Line x1="37.5" y1="16" x2="37.5" y2="36" stroke="#ffffff" strokeWidth="3"/>
                <Line x1="30.5" y1="21" x2="30.5" y2="36" stroke="#ffffff" strokeWidth="3"/>
                <Line x1="23.5" y1="25" x2="23.5" y2="36" stroke="#ffffff" strokeWidth="2"/>
                <Line x1="17.5" y1="29" x2="17.5" y2="36" stroke="#ffffff" strokeWidth="1"/>
                <Line x1="11.5" y1="14" x2="11.5" y2="39" stroke="#ffffff"/>
                <Line x1="39" y1="39.5" x2="11" y2="39.5" stroke="#ffffff"/>
                <Path d="M28 14L32.5 15M32.5 15L31.5 19.5M32.5 15L26 20L23.5 19L16 25.5" stroke="#ffffff" strokeWidth="1"/>
            </Svg>





  	
		);
	}
}