
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
  height:100%;
  alignItems:center;
  justifyContent:center;
  justifyContent:space-around;
  
`

export{
     Body, BodyInner
}