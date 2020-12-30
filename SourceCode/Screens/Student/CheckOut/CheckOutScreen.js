import React from 'react';
import {Picker,Text,View,TextInput, TouchableOpacity,Dimensions,StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { RNCamera } from "react-native-camera";
import QRCodeScanner from 'react-native-qrcode-scanner';

import {CheckOutController} from './CheckOutController';

import Layout from '../../../Layout/Layout';

import {Body, BodyInner} from './CheckOutCss';
let bodyHeight = 500;
const Container = styled.View`
    display:flex;
    flexDirection: column;
    width: ${Dimensions.get('window').width}px;
    height:100%;
    alignItems:center;
    justifyContent:center;
`
    const CoverContainer = styled.View`
        display:flex;
        flexDirection: column;
        elevation: 1;
        width: ${Dimensions.get('window').width}px;
        height:100%;
        position:absolute;
        backgroundColor:red;
        marginTop:50px;
    `
    const SniperContainer = styled.View`
        display:flex;
        flexDirection: column;
        elevation: 1;
        width: ${(Dimensions.get('window').width/2)}px;
        height: ${(Dimensions.get('window').width/2)}px;
        alignItems:center;
        justifyContent:center;
        position:absolute;

    `
const TopView = styled.View`
    width: ${Dimensions.get('window').width}px;
    backgroundColor:#484C5C;
    backgroundColor: rgba(72, 76, 92, 0.7);
    backgroundColor:yellow;
    height:20%;
`
const BodyView = styled.View`
    width: ${Dimensions.get('window').width}px;
    flexDirection:row;
    justifyContent:space-between;
    backgroundColor:pink;
    height: ${(Dimensions.get('window').width/1.5)}px;
    height:60%;
    backgroundColor:red;
`
    const LeftView = styled.View`
        width: ${(Dimensions.get('window').width-(Dimensions.get('window').width/2))/2}px;
        height: 100%;
        backgroundColor:#484C5C;
        backgroundColor: rgba(72, 76, 92, 0.7);
        backgroundColor:blue;
    `
    const RightView = styled.View`
        width: ${(Dimensions.get('window').width-(Dimensions.get('window').width/2))/2}
        height: ${(Dimensions.get('window').width/1.5)}px;
        backgroundColor:#484C5C;
        backgroundColor: rgba(72, 76, 92, 0.7);
        height: 100%;
        backgroundColor:green;
    `
const BottomView = styled.View`
    width: ${Dimensions.get('window').width}px;
    height:20%;
    backgroundColor:#484C5C;
    backgroundColor: rgba(72, 76, 92, 0.7);
    backgroundColor:black;
    backgroundColor:yellow;
`


    const IconView = styled.View`
        display:flex;
        flexDirection: column;
        elevation: 1;
        height:100%;
        width:100%;
        
        alignItems:center;
        justifyContent:center;
        borderWidth:0.1px;
        borderRadius:5px;
        borderColor:#ffffff;
        backgroundColor: transparent;
    `
        const IconViewInner = styled.View`
            flexDirection:row;
            justifyContent:space-between;
            alignItems:${props=>(props.index=="1"?"flex-start":"flex-end")};
            width:100%;
            height:50%;
            borderRadius:5px;
        `
const SubIconViewInner = styled.View`
width:30px;
height:30px;
borderColor:#1BA6EF;
`
const ResultIconView = styled.View`
width:${((Dimensions.get('window').width/2)-9)/3}px;
height:${((Dimensions.get('window').width/2)-9)/3}px;

position:absolute;
justifyContent:center;
alignItems:center;
`
const CustomButtomText = styled.Text`
color:#13C911;
fontSize:17;
`

export default class CheckOutScreen extends CheckOutController {
    static navigationOptions = {
        headerShown: true,
        title:'Check In',
        //title:this.props.route.params.ScreenTitle
        headerStyle:{
            backgroundColor:'#071E50'
        },
        headerTitleStyle:{
            color:'#ffffff',
            fontFamily:'Roboto',
            fontSize:15,
            textAlign:'center'
        },
        headerLeftContainerStyle:{
            backgroundColor:'#030F29'
        },
        headerBackTitleStyle:{
            color:'#ffffff'
        },
        headerTintColor:'#ffffff'
      };
	constructor(props){
        super(props);
      
       

    }//end constructor
    
    isWeekend(date){
        var vDate = new Date(date.dateString);
       return ((vDate.getDay() == 6 || vDate.getDay() == 0)?true:false);
    }
	render() {
        let cheight = (Dimensions.get('window').width/1.5);
        cheight =Math.round(cheight);
       // alert(cheight);
		return (

            //title={this.props.route.params.ScreenTitle}
           
            <Layout isBack="true" Title="ok" onBack={()=>this.props.navigation.goBack()}>
                <Body>
                   

                        <Container>


                        

                            <SniperContainer>
                                <IconView>
                                    <ResultIconView>
                                        <Text style={{color:"#ffffff",fontSize:40}}>+</Text>
                                    </ResultIconView>

                                    <IconViewInner index="1">
                                        <SubIconViewInner style={styles.radius1}></SubIconViewInner>
                                        <SubIconViewInner style={styles.radius2}></SubIconViewInner>
                                    </IconViewInner>

                                    <IconViewInner index="2">
                                        <SubIconViewInner style={styles.radius3}></SubIconViewInner>
                                        <SubIconViewInner style={styles.radius4}></SubIconViewInner>
                                    </IconViewInner>
                                    
                                </IconView>
                                
                            </SniperContainer>

                            <QRCodeScanner
                                style={{height:"90%",flex: 1,alignItems:"center",justifyContent:"center",backgroundColor:"silver"}}
                                containerStyle={{display:"flex",height:cheight,width:"100%"}}
                                cameraStyle={{height:cheight,width:"90%",alignSelf:"center"}}
                                onRead={this.onSuccess}
                                ref={(node) => { this.scanner = node }}
                                flashMode={(1==0)? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off} 
                                flashMode={RNCamera.Constants.FlashMode.off}
                            />
              
                        </Container>
                       
                   
                </Body>
            </Layout>
         
		);
	}
}

const styles = StyleSheet.create({
    textWithShadow:{
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      color:"#FFFFFF",fontSize:17,fontWeight:'bold',marginTop:5
  },
    
    radius1:{
      borderTopLeftRadius:5,
      borderTopWidth:2,
      borderLeftWidth:2,
    },
    radius2:{
      borderTopRightRadius:5,
      borderTopWidth:2,
      borderRightWidth:2,
    },
    radius3:{
      borderBottomLeftRadius:5,
      borderBottomWidth:2,
      borderLeftWidth:2,
    },
    radius4:{
      borderBottomRightRadius:5,
      borderBottomWidth:2,
      borderRightWidth:2,
    }
  })