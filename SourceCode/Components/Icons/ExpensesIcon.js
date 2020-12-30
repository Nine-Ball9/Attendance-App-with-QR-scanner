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


export default class ExpensesIcon extends React.Component {

	constructor(props){
        super(props);
	}
	render() {
		return (
            <Svg width={(this.props.isTablet=="true"?80:50)} height={(this.props.isTablet=="true"?80:50)} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="25" cy="25" r="25" fill="#D06808" />
                <Ellipse cx="35.5" cy="23.5" rx="7.5" ry="4.5" fill="#ffffff"/>
                <Path d="M43 28.4144C43 29.8424 39.6421 31 35.5 31C31.3579 31 28 29.8424 28 28.4144C28 26.9864 31.3579 29.7072 35.5 29.7072C39.6421 29.7072 43 26.9864 43 28.4144Z" fill="#ffffff"/>
                <Path d="M43 32.5004C43 33.8809 39.6421 35 35.5 35C31.3579 35 28 33.8969 28 32.5164C28 30.8499 31.3579 33.7502 35.5 33.7502C39.6421 33.7502 43 31.1199 43 32.5004Z" fill="#ffffff"/>
                <Path d="M43 36.5004C43 37.8809 39.6421 39 35.5 39C31.3579 39 28 37.8969 28 36.5164C28 34.8499 31.3579 37.7502 35.5 37.7502C39.6421 37.7502 43 35.1199 43 36.5004Z" fill="#ffffff"/>
                <Ellipse cx="17.5" cy="28.5" rx="7.5" ry="4.5" fill="#ffffff"/>
                <Path d="M25 33.4144C25 34.8424 21.6421 36 17.5 36C13.3579 36 10 34.8424 10 33.4144C10 31.9864 13.3579 34.7072 17.5 34.7072C21.6421 34.7072 25 31.9864 25 33.4144Z" fill="#ffffff"/>
                <Path d="M25 36.6672C25 38.5078 21.6421 40 17.5 40C13.3579 40 10 38.5291 10 36.6885C10 34.4666 13.3579 38.3336 17.5 38.3336C21.6421 38.3336 25 34.8265 25 36.6672Z" fill="#ffffff"/>
                <Path d="M23.7338 8.91091C23.345 8.51867 22.7119 8.5159 22.3196 8.90471L15.9279 15.2407C15.5356 15.6295 15.5328 16.2627 15.9217 16.6549C16.3105 17.0471 16.9436 17.0499 17.3359 16.6611L23.0174 11.0291L28.6495 16.7107C29.0383 17.1029 29.6714 17.1057 30.0637 16.7169C30.4559 16.3281 30.4587 15.6949 30.0699 15.3027L23.7338 8.91091ZM23.9764 20.3895L24.0236 9.61929L22.0237 9.61052L21.9765 20.3807L23.9764 20.3895Z" fill="#ffffff"/>
            </Svg>


  	
		);
	}
}