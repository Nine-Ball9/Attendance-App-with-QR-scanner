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
    LinearGradient,
    Stop,
    SvgXml

} from 'react-native-svg';


export default class BacIcon extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            
            <Svg width={this.props.width} height={this.props.height} viewBox="0 0 190 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Defs>
                <LinearGradient id="paint0_linear" x1="0" y1="25" x2="166" y2="25" gradientUnits="userSpaceOnUse">
                    <Stop offset="0.338542" stopColor="#ffffff"/>
                    <Stop offset="0.979167" stopColor="#06B7F9"/>
                </LinearGradient>
                </Defs>
                <Path d="M4.0191 104.822L185.5 -8.81519e-07L185.5 32.3219L58.4971 104.822L185.5 177.322L185.538 209.578L4.0191 104.822Z" 
                fill="url(#paint0_linear)"
                clipPath="url(#f2)"/>
            </Svg>
		);
	}
}