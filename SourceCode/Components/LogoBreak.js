import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import Svg,{
	Path,
	Symbol,
	Defs,
	LinearGradient,
    Stop,
    Rect,
    Circle
} from 'react-native-svg';



export default class LogoBreak extends React.Component {

	constructor(props){
		super(props);
		process.nextTick = setImmediate;
	}

	render() {
		return (
			<Svg width="100%" height="100%" viewBox="0 0 375 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="65" cy="5" r="1.5" stroke="#377AA4"/>
                <Circle cx="298" cy="4" r="1.5" stroke="#377AA4"/>
                <Circle cx="362" cy="10" r="1.5" stroke="#377AA4"/>
                <Circle cx="8" cy="10" r="1.5" stroke="#377AA4"/>
                <Path d="M297 4.64342L244.488 4.64337C243.797 4.64337 243.147 4.97009 242.734 5.52447L237.085 13.1188C236.673 13.6732 236.022 13.9999 235.331 13.9999H140.683C140.238 13.9999 139.804 13.8641 139.438 13.6107L127.062 5.03263C126.696 4.77917 126.262 4.64337 125.817 4.64337L66 4.64331" stroke="url(#paint0_linear)"/>
                <Path d="M361 10L245.988 10.0001C245.297 10.0001 244.647 10.3268 244.234 10.8812L238.585 18.4755C238.173 19.0299 237.522 19.3566 236.831 19.3566H138.144C137.724 19.3566 137.312 19.2354 136.959 19.0075L123.541 10.3491C123.188 10.1212 122.776 10 122.356 10H9" stroke="url(#paint1_linear)"/>
                <Defs>
                    <LinearGradient id="paint0_linear" x1="142.556" y1="56.6021" x2="277.122" y2="55.4821" gradientUnits="userSpaceOnUse">
                        <Stop offset="0.150972" stopColor="#377AA4"/>
                        <Stop offset="0.25379" stopColor="#459DCF"/>
                        <Stop offset="0.603675" stopColor="#4D9ECE"/>
                        <Stop offset="0.827312" stopColor="#377AA4"/>
                    </LinearGradient>
                    <LinearGradient id="paint1_linear" x1="144.057" y1="61.9588" x2="278.623" y2="60.8389" gradientUnits="userSpaceOnUse">
                        <Stop offset="0.150972" stopColor="#377AA4"/>
                        <Stop offset="0.25379" stopColor="#459DCF"/>
                        <Stop offset="0.603675" stopColor="#4D9ECE"/>
                        <Stop offset="0.827312" stopColor="#377AA4"/>
                    </LinearGradient>
                </Defs>
            </Svg>



		);
	}
}