import React from 'react';

import { View, StyleSheet, Image,Text } from 'react-native';

import {Container,Body,BodyLogo1,BodyContent,} from './LayoutCss'

export default class Layout extends React.Component {

	constructor(props){
        super(props);
       
    }//end constructor
    
	render() {
       
		return (
            <Container>
               
               <Body isHeader={this.props.isHeader?this.props.isHeader:'yes'}>
                   <BodyLogo1 isHeader={this.props.isHeader?this.props.isHeader:'yes'}></BodyLogo1>

                   <BodyContent isHeader={this.props.isHeader?this.props.isHeader:'yes'}>
                    { this.props.children }
                   </BodyContent>

               </Body>
            </Container>
         
		);
	}
}