import React from 'react';
import {Picker,Text,View,TextInput, TouchableOpacity} from 'react-native';



import {AttendanceController} from './AttendanceController';

import Layout from '../../../Layout/Layout';

import {Body, BodyInner, Row,CalendarRow, Label,ButtonRow, RowFooter, CustomButton} from './AttendanceCss';

import LinearButton from '../../../Components/Buttons/LinearButton';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class AttendanceScreen extends AttendanceController {
    static navigationOptions = {
        headerShown: true,
        title:'Attendance',
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
		return (
            <Layout isBack="true" isHeader="yes" title="Attendance" onBack={()=>this.props.navigation.goBack()}>
                <Body>
                    <BodyInner>
                   
                        <Row>
                           <Text style={{width:'100%',textAlign:'left',color:'#3D79B1',fontSize:11,fontWeight:'bold',fontFamily:'Roboto'}}>Your attendance is 10%</Text>
                        </Row>
                        
                        <ButtonRow>
                            <CustomButton bgColor="#6AD868" 
                                onPress={()=>{
                                    this.props.navigation.navigate('CheckInScreen',{ScreenTitle:"Check In"});
                                }}
                            >
                               <Label >Check In</Label>
                            </CustomButton>

                            <CustomButton  bgColor="#CE4C4C"
                            onPress={()=>{
                                    this.props.navigation.navigate('CheckInScreen',{ScreenTitle:"Check Out"});
                                }}
                            >
                               <Label>Check Out</Label>
                           </CustomButton>

                        </ButtonRow>

                        <CalendarRow>
                            <Calendar 
                            style={{
                                borderWidth: 1,
                                borderColor: 'gray',
                                width:'90%',
                                backgroundColor:'#DEECF5'
                            }}
                            // Specify theme properties to override specific styles for calendar parts. Default = {}
                            theme={{
                                backgroundColor: '#DEECF5',
                                calendarBackground: '#DEECF5',
                                textSectionTitleColor: '#000000',
                                selectedDayBackgroundColor: '#00adf5',
                                todayTextColor: '#00adf5',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: '#ffffff',
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: '#ffffff',
                                indicatorColor: 'blue',
                                textDayFontFamily: 'Roboto Slab',
                                textMonthFontFamily: 'Roboto Slab',
                                textDayHeaderFontFamily: 'Roboto Slab',
                                textDayFontWeight: '300',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 11,
                                textMonthFontSize: 11,
                                textDayHeaderFontSize: 11,
                                'stylesheet.calendar.header': {
                                    month:{
                                        color:'red',
                                    },
                                    week: {
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        backgroundColor:'#DEECF5',
                                        color:'red',
                                        marginTop: 5,
                                    },
                                    date: {
                                        marginTop: 5,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }
                                },
                                'stylesheet.calendar.container': {
                                    container: {
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        backgroundColor:'#DEECF5'
                                    }
                                }
                            }}
                            dayComponent={({date, state}) => {
                                return (
                                    <View style={{backgroundColor:(this.isWeekend(date)?"#94EDF9":'#DAE4EE'),paddingTop:5,paddingBottom:5,width:'90%',display:'flex'}}>
                                        <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>
                                        {date.day}
                                        </Text>
                                    </View>
                                );
                            }}
                            />
                        </CalendarRow>

                        

                    </BodyInner>
                   
                </Body>
            </Layout>
         
		);
	}
}
