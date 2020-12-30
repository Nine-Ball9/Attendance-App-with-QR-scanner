import {Image,Dimensions,Picker,Text,TextInput, TouchableOpacity,  StyleSheet,View,Share,Linking} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);

let headerHeight = (isTablet?70:60);
let bodyHeight = Dimensions.get('window').height-(headerHeight );

let bodyLogoHeight = ((247/589) * bodyHeight);


let bodyContentHeight = bodyHeight -bodyLogoHeight-50;

const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  backgroundColor:#4896DE;
  backgroundColor:#ffffff;
  alignItems:center;
`
const Body = styled.View`
  display:flex;
  flexDirection: column;
  height:${ bodyHeight }px;
  height:${ props => (props.isHeader=="no"?bodyHeight+headerHeight:bodyHeight)}px;
  width: 100%;
  alignItems:center;
  `

  const BodyLogo1 = styled.View`
  height:${ props => (props.isHeader=="no"?bodyLogoHeight+headerHeight:bodyLogoHeight)}px;
  width: 100%;
  alignItems:center;
  `
const BodyContent = styled.View`
  display:flex;
  flexDirection: column;
  
  height:${bodyContentHeight}px;
  height:${ props => (props.isHeader=="no"?bodyContentHeight:bodyContentHeight)}px;
  width: ${Dimensions.get('window').width}px;
  alignItems:center;

`
export{
    Container, Body,BodyLogo1, BodyContent,
}