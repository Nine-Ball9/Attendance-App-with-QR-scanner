
import {Image,Dimensions,Picker,Text,TextInput, TouchableOpacity,  StyleSheet,View,Share,Linking} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);

const Body = styled.View`
  display:flex;
  flexDirection: column;
  width:100%;
  alignItems:center;
  justifyContent:space-around;
`
const BodyInner = styled.View`
  flexDirection: column;
  width: ${isTablet?70:99}%;
  marginTop:${isTablet?10:1}%;
  alignItems:center;
`
const Row = styled.View`
    display:flex;
    flexDirection: column;
    alignItems:center;
    
    width:80%;
    height:20%;
    marginTop:${(isTablet?20:20)}px;
`
    const RowTop = styled.View`
    display:flex;
    flexDirection: row;
    width: 100%;
    height:30%;
    alignItems:center;
    borderRadius: 10px;
    `
    const RowBottom = styled.View`
    display:flex;
    flexDirection: row;
    width: 99%;
    height:70%;
    backgroundColor:#ffffff;
    alignItems:center;
    justifyContent:flex-start;
    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: #4896DE; 
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
    color:#377AA4;
`
const SaveButton = styled.TouchableOpacity`
    display:flex;
    flexDirection: row;
    width: 100%;
    height:${(isTablet?60:40)}px;
    width:100%;
    marginTop:5px;
    alignItems:center;
    justifyContent:center;

    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: #475279; 
    backgroundColor:#4896DE;
    marginTop:${(isTablet?25:2)}px;
`


export{
     Body, BodyInner, Row, RowTop, RowBottom,Label, RowFooter, SaveButton
}