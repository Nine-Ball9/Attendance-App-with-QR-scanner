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


export default class IncomeIcon extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            <Svg width={(this.props.isTablet=="true"?80:50)} height={(this.props.isTablet=="true"?80:50)} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25" cy="25" r="24" fill="#282828" strokeWidth="1" stroke="#ffffff"/>
                <Ellipse cx="35.5" cy="23.5" rx="7.5" ry="4.5" fill="#ffffff"/>
                <Path d="M43 28.4144C43 29.8424 39.6421 31 35.5 31C31.3579 31 28 29.8424 28 28.4144C28 26.9864 31.3579 29.7072 35.5 29.7072C39.6421 29.7072 43 26.9864 43 28.4144Z" fill="#ffffff"/>
                <Path d="M43 32.5004C43 33.8809 39.6421 35 35.5 35C31.3579 35 28 33.8969 28 32.5164C28 30.8499 31.3579 33.7502 35.5 33.7502C39.6421 33.7502 43 31.1199 43 32.5004Z" fill="#ffffff"/>
                <Path d="M43 36.5004C43 37.8809 39.6421 39 35.5 39C31.3579 39 28 37.8969 28 36.5164C28 34.8499 31.3579 37.7502 35.5 37.7502C39.6421 37.7502 43 35.1199 43 36.5004Z" fill="#ffffff"/>
                <Ellipse cx="17.5" cy="28.5" rx="7.5" ry="4.5" fill="#ffffff"/>
                <Path d="M25 33.4144C25 34.8424 21.6421 36 17.5 36C13.3579 36 10 34.8424 10 33.4144C10 31.9864 13.3579 34.7072 17.5 34.7072C21.6421 34.7072 25 31.9864 25 33.4144Z" fill="#ffffff"/>
                <Path d="M25 36.6672C25 38.5078 21.6421 40 17.5 40C13.3579 40 10 38.5291 10 36.6885C10 34.4666 13.3579 38.3336 17.5 38.3336C21.6421 38.3336 25 34.8265 25 36.6672Z" fill="#ffffff"/>
                <Path d="M22.3761 21.1014C22.772 21.4865 23.4051 21.4779 23.7902 21.0821L30.0667 14.6318C30.4518 14.2359 30.4432 13.6028 30.0473 13.2177C29.6515 12.8325 29.0184 12.8412 28.6333 13.237L23.0542 18.9706L17.3206 13.3916C16.9248 13.0064 16.2917 13.015 15.9065 13.4109C15.5214 13.8067 15.53 14.4398 15.9258 14.825L22.3761 21.1014ZM21.9265 9.62902L22.0736 20.3983L24.0734 20.371L23.9263 9.6017L21.9265 9.62902Z" fill="#ffffff"/>
            </Svg>

  	
		);
	}
}