import {Image,Dimensions,Picker,Text,TextInput, TouchableOpacity,  StyleSheet,View,Share,Linking} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);

let headerHeight = (isTablet?70:60);
let bodyHeight = Dimensions.get('window').height-(headerHeight );
/*
bodyHeight = 589
bodyLogoHeight = 247
bodyHeight = 500
bodyLogoHeight = ?

bodyLogoHeight = ((bodyLogoHeight/589) * bodyHeight)


*/
let bodyLogoHeight = ((247/589) * bodyHeight);
let noheaderBodyLogoHeight = ((247/589) * (bodyHeight+headerHeight));
let bodyContentHeight = bodyHeight -bodyLogoHeight;
let noheaderbodyContentHeight = bodyHeight+headerHeight -bodyLogoHeight;
const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  height:100%;
  width:100%;
  backgroundColor:#4896DE;
  backgroundColor:#ffffff;
  alignItems:center;
`
const Header = styled.View`
  display:flex;
  flexDirection: row;
  height: ${headerHeight}px;
  width: ${Dimensions.get('window').width}px;
  alignItems:center;
  justifyContent:center;
  
`
  const HeaderLeft = styled.TouchableOpacity`
    display:flex;
    flexDirection: column;
    height: 100%;
    width: 70px;
    alignItems:center;
    justifyContent:center;

    
  `
  const HeaderRight = styled.View`
    display:flex;
    flexDirection: column;
    height: 100%;
    width: ${Dimensions.get('window').width-70}px;
    alignItems:center;
    justifyContent:center;
  `
const Body = styled.View`
  display:flex;
  flexDirection: column;
  height:${ props => (props.isHeader=="no"?(bodyHeight+headerHeight):bodyHeight)}px;
  width: ${Dimensions.get('window').width}px;
  alignItems:center;

  `

  const BodyLogo1 = styled.View`
  height:${bodyLogoHeight}px;
  height:${ props => (props.isHeader=="no"?noheaderBodyLogoHeight:bodyLogoHeight)}px;
  width: ${Dimensions.get('window').width}px;
  alignItems:center;
  backgroundColor:blue;
  `
const BodyLogo = styled.View`
  display:flex;
  flexDirection: column;
  height:${bodyLogoHeight}px;
  
  width: ${Dimensions.get('window').width}px;
  alignItems:center;
  position:absolute;
  zIndex:100000;
  marginTop:50px;
`

const LogoContainer = styled.View`
  display:flex;
  flexDirection: column;
  height:57%;
  width: ${Dimensions.get('window').width}px;
  alignItems:center;
`
const LogoTextContainer = styled.View`
  display:flex;
  flexDirection: column;
  height:29%;
  width: ${Dimensions.get('window').width}px;
  justifyContent:center;
  alignItems:center;
`
const LogoBreakContainer = styled.View`
  display:flex;
  flexDirection: column;
  height:16%;
  width: ${Dimensions.get('window').width}px;
  alignItems:center;
`
const BodyContent = styled.View`
  display:flex;
  flexDirection: column;
  height:${ props => (props.isHeader=="no"?noheaderbodyContentHeight:bodyContentHeight)}px;
  width: ${Dimensions.get('window').width}px;
  alignItems:center;

`

const CustomButton = styled.TouchableOpacity`
    display:flex;
    flexDirection: row;
    width:100%;
    height:100%;
    marginTop:5px;
    alignItems:center;
    justifyContent:center;
`

export{
    Container, Header,HeaderLeft,HeaderRight,Body,BodyLogo1,BodyLogo,LogoContainer,LogoTextContainer,LogoBreakContainer, BodyContent, CustomButton
}