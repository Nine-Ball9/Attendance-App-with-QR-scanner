import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,View,Platform,Svg,Defs,Pattern,Linking } from 'react-native';

import styled from 'styled-components/native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MainView = styled.View`
    ${
        props => (props.showScreen==true?"width:100%;height:100%;":"width:0;height:0;display:none;opacity: 0;")
    }
    position:absolute;
    alignItems:center;
    justifyContent:center;
    backgroundColor:rgba(196, 196, 196, 0.9);
    zIndex:50000;
    `
    
    const Container = styled.View`
        display:flex;
        width: 300px;
        height:268px;
        alignItems:center;
        justifyContent:center;
    `
    const HeaderView = styled.View`
    width: 250px;
    height: 50px;
    backgroundColor:#475279;
    backgroundColor:#3E3F44;
    flexDirection:row;
    alignItems:center;
    justifyContent:center;
    display:flex;
    borderTopLeftRadius:5px;
    borderTopRightRadius:5px;
    flexDirection:column;
    borderBottomWidth:1px;
    borderBottomColor:#06B7F9;

    `
    const YearText = styled.Text`
    width: 80%;
    fontSize:16px;
    color:#06B7F9;
    `
    const MonthDay = styled.Text`
    width: 80%;
    color:#06B7F9;
    `
        const FooterView = styled.View`
            width: 250px;
            height: 50px;
            backgroundColor:#ffffff;
            flexDirection:row;
            alignItems:center;
            justifyContent:center;
            display:flex;
            borderBottomLeftRadius:5px;
            borderBottomRightRadius:5px;
        `
        const CustomButtom  = styled.TouchableOpacity`
            width:${props => (props.width)}
            alignItems:center;
            height:100%;
            backgroundColor:#54555A;
            justifyContent:center;
            ${props => ((props.width=="70%")?"borderBottomLeftRadius:5px;":" borderBottomRightRadius:5px;")}
        `
export default class CalendarComponent extends Component {
    constructor(Props){
        super(Props);
        var dict = {};
        let date = new Date(this.props.selectedDate);
        
        var day = ("0" + date.getDate()).slice(-2);
        var monthIndex =("0" + (date.getMonth() + 1)).slice(-2)
        var year = date.getFullYear();
        let dateString =  year + "-" +monthIndex +"-"+day;
        
        dict[ dateString ] = {selected: true,  selectedColor: '#06B7F9'};
        
        this.state = {
            showScreen:true,
            year:year,
            monthDay:monthNames[date.getMonth()]+" "+date.getDate(),
            selectedDate:this.props.selectedDate,
            markedDates: dict
        }  
        
    }
    
   
    Cancel= () => {
       
      };
    DayChange=(day)=>{
        var dict = {};
        dict[ day.dateString ] = {selected: true,  selectedColor: '#475279'};
        
        this.setState(
            {
                selectedDate: new Date(day.timestamp),
                markedDates: dict,
                monthDay: monthNames[day.month-1] + " "+ day.day
            }
        );
    }
    OkClick =()=>{
        this.props.CalendarToggleOnClick(this.state.selectedDate);
    }
    render(){
                     

        return(
            
            <MainView showScreen={this.state.showScreen} >
                <Container >
                    <HeaderView>
                        <YearText>{this.state.year}</YearText>
                        <MonthDay>{this.state.monthDay}</MonthDay>
                    </HeaderView>
                        <CalendarList
                        current={new Date(this.state.selectedDate)}
                        markedDates={this.state.markedDates}
                        // Collection of dates that have to be marked. Default = {}
                        onDayPress={(day) => { this.DayChange(day) }}
                        calendarWidth={250}
                        pastScrollRange={50}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={50}
                        theme={{
                            'stylesheet.calendar.header': {
                                header: {
                                }
                            }
                        }}
                        />
                        <FooterView>
                            <CustomButtom width="70%" onPress={()=>{this.props.CalendarToggleOnClick();}}>
                                <Text style={{color:'#ffffff'}}>Cancel</Text>
                            </CustomButtom>
                            <CustomButtom width="30%"  onPress={this.OkClick}>
                                <Text style={{color:'#ffffff',fontWeight:'bold'}}>OK</Text>
                            </CustomButtom>
                        </FooterView>
                    
                </Container>
            </MainView>
        )
    }
}