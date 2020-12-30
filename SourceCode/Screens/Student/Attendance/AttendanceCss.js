
import {Image,Dimensions,Picker,Text,TextInput, TouchableOpacity,  StyleSheet,View,Share,Linking} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);

const Body = styled.ScrollView`
  display:flex;
  flexDirection: column;
  width:100%;
  height:100%;
`
const BodyInner = styled.View`
  flexDirection: column;
  width: 100%;
  alignItems:center;
  alignItems:center;
  justifyContent:space-around;
`
const Row = styled.View`
    display:flex;
    flexDirection: row;
    alignItems:center;
    justifyContent:space-around;
    width:80%;
    
`

const ButtonRow = styled.View`
    display:flex;
    flexDirection: row;
    alignItems:center;
    justifyContent:space-around;
    width:80%;
    height:70px;
    paddingBottom:5px;
    paddingTop:5px;
    `

const CalendarRow = styled.View`
    display:flex;
    flexDirection: column;
    alignItems:center;
    
    width:100%;
`
    
const RowFooter = styled.View`
    display:flex;
    flexDirection: row;
    width: 100%;
    width:100%;
    marginTop:50px;
    alignItems:center;
    justifyContent:center;
`
const Label = styled.Text`
    fontFamily:'Tamil Sangam MN';
    fontSize:12px;
    fontWeight:bold;
    color:#ffffff;
`
const CustomButton = styled.TouchableOpacity`
    display:flex;
    flexDirection: row;
    height:90%;
    width: 40%;
    marginTop:5px;
    alignItems:center;
    justifyContent:center;

    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: #475279; 
    backgroundColor:${
        props => (props.bgColor?props.bgColor:"yellow")
    };
    marginTop:${(isTablet?25:2)}px;
    borderRadius: 5px;
    borderWidth: 1px;
    borderColor: #469DCF;
`


export{
     Body, BodyInner, Row,CalendarRow,Label,ButtonRow, RowFooter, CustomButton
}