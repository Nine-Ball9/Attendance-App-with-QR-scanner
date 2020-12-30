import React from 'react';
import {Picker,Text,View,TextInput,ScrollView, TouchableOpacity} from 'react-native';

import {TimeTableController} from './TimeTableController';

import Layout from '../../../Layout/Layout';

import {Body, HeaderRow,TableContainer, TableHeader,TableData,Row,Column} from './TimeTableCss';
const DATAHeader = [
    {
      id: '1',
      day:"Sun",
      data:[
            {text:""},
            {text:"Mon"},
            {text:"Tue"},
            {text:"Wed"},
            {text:"Thu"},
            {text:"Fri"}
        ]
    }
  ];
const DATA = [
    
    {
        id: '2',    
        data:[
              {text:"9:00 AM To 9:50 AM"},
              {text:"modern electronic communication systems"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"}
          ]
      },
      {
        id: '3',
        data:[
            {text:"10:00 AM To 10:50 AM"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"}
          ]
      },
      {
        id: '4',
        data:[
            {text:"11:00 AM To 11:50 AM"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"}
          ]
      },
      {
        id: '5',
        data:[
            {text:"1:00 PM To 1:50 PM"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"}
          ]
      },
      {
        id: '6',
        data:[
            {text:"2:00 PM To 2:50 PM"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"}
          ]
      },{
        id: '7',
        data:[
            {text:"3:00 PM To 3:50 PM"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"},
              {text:"no"}
          ]
      },
  ];


  function Header({ item }) {
    let data = [];
    item.data.forEach(function(v,i){   
        console.log(v.text);       
        data.push(<Column bgColor={(v.text!=""?"#94B6F9":"#DEECF5")} width="100px"><Text style={{textAlign:'center'}}>{v.text}</Text></Column>);
    });

    return (
        <Row>
            {data}
        </Row>
    );
  } 
function Item({ item }) {
    let data = [];
    item.data.forEach(function(v,i){   
        console.log(v.text);       
        data.push(<Column><Text style={{textAlign:'center'}}>{v.text}</Text></Column>);
    });

    return (
        <Row marginLeft="5">
            {data}
        </Row>
    );
  }
export default class TimeTableScreen extends TimeTableController {
    static navigationOptions = {
        headerShown: false,
        title:'Attendance',
        headerStyle:{
            backgroundColor:'#071E50',
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
		return (
            <Layout isBack="true" isHeader="no" title="Attendance" onBack={()=>this.props.navigation.goBack()}>
                <Body>
                    <HeaderRow>
                        <Text style={{color:'#ffffff',fontSize:11,fontWeight:'bold',fontFamily:'Roboto'}}>Time Table for Final Year.</Text>
                    </HeaderRow>
                    <ScrollView>
                    <TableContainer>
                        <TableHeader 
                            horizontal={true}
                            data={DATAHeader}
                            renderItem={({ item }) => <Header item={item} />}
                            keyExtractor={item => item.id}
                        >
                        </TableHeader>

                        <TableData 
                            horizontal={true}
                            data={DATA}
                            renderItem={({ item }) => <Item item={item} />}
                            keyExtractor={item => item.id}
                        >
                        </TableData>
                    </TableContainer>
                    </ScrollView>
                    
                   
                </Body>
            </Layout>
         
		);
	}
}
