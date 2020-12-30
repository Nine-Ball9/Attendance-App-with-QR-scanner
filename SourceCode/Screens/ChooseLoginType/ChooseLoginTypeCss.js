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
  height:90%;
  width: ${isTablet?70:99}%;
  marginTop:${isTablet?10:1}%;
  alignItems:center;
`
const Row = styled.View`
    display:flex;
    flexDirection: row;
    width: 100%;
    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: #4896DE; 
    width:90%;
    backgroundColor:#54555A;
    marginTop:${(isTablet?20:20)}px;
`
    const RowLeft = styled.View`
    display:flex;
    flexDirection: row;
    width: ${(isTablet?15:15)}%;
    alignItems:center;
    justifyContent:center;
    borderRadius: 10px;
    `
    const RowRight = styled.View`
    display:flex;
    flexDirection: row;
    width: ${(isTablet?85:85)}%;
     ${props=>{(props.multiline=="true"?"height:100px":null)}}
    alignItems:center;
    justifyContent:flex-start;
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
     Body, BodyInner, Row, RowLeft, RowRight, RowFooter, SaveButton
}