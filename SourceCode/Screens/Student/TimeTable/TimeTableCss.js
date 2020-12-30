
import {Image,Dimensions,Picker,Text,TextInput, TouchableOpacity,  StyleSheet,View,Share,Linking} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);

const Body = styled.View`
  display:flex;
  flexDirection: column;
  width:95%;
  height:100%;
`

const HeaderRow = styled.View`
    display:flex;
    width:100%;
    height:10%;
    backgroundColor:#377AA4;
    alignItems:center;
    justifyContent:center;  
`
const TableContainer = styled.View`
    display:flex;
    flexDirection:row;
    width:100%;
`
const TableHeader = styled.FlatList`
    backgroundColor:#DEECF5;
    borderRightWidth:2px;
    borderRightColor:#DEECF5;
    borderLeftWidth:2px;
    borderLeftColor:#DEECF5;
    width:140px;
   
`
const TableData = styled.FlatList`
    backgroundColor:#DEECF5;
`


const Row = styled.View`
    display:flex;
    marginLeft:${props => (props.marginLeft?props.marginLeft:"0")}px;
    
    flexDirection:column;
    
`

const Column = styled.View`
    alignItems:center;
    justifyContent:space-around;
    height:53px;
    width:${props => (props.width?props.width:"206px")};
    marginTop:5px;
    backgroundColor:${props => (props.bgColor?props.bgColor:"#ffffff")};;
    
`


export{
     Body,HeaderRow,TableContainer, TableHeader,TableData,Row,Column
}