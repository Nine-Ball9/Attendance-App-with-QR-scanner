import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,View,Platform,Svg,Defs,Pattern,Linking } from 'react-native';

import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker';

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
        width: 250px;
        height:268px;
        alignItems:center;
        
        justifyContent:center;
       
    `
    const HeaderView = styled.View`
    width: 250px;
    height: 50px;
    backgroundColor:#3E3F44;
    flexDirection:row;
    alignItems:center;
    justifyContent:center;
    display:flex;
    borderTopLeftRadius:5px;
    borderTopRightRadius:5px;
    flexDirection:column;
    `
    const YearText = styled.Text`
    width: 80%;
    fontSize:16px;
    color:#06B7F9;
    `
    const MonthDay = styled.Text`
    width: 80%;
    color:#ffffff;
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
export default class TimePickerComponent extends Component {
    constructor(Props){
        super(Props);
        
        this.state = {
            showScreen:true,
            selectedTime:this.props.selectedTime,
            isChanged:false
        } 
    }
    
    OkClick =()=>{
        if(this.state.isChanged){
            this.setState({isChanged:false});
            this.props.TimePickerToggleOnClick(this.state.selectedTime);
        }
        else{
            this.setState({isChanged:false});
            this.props.TimePickerToggleOnClick();
        }
        
    }
   
    CancelClick= () => {
       // alert('hello');
        //alert(this.props.selectedTime);
        //this.setState({selectedTime: this.props.selectedTime});
        this.setState({isChanged:false});
        //this.props.TimePickerToggleOnClick(this.props.selectedTime);
        this.props.TimePickerCancel();
      };
      
    onDateChange=(dateTime)=>{
        
        this.setState({selectedTime: dateTime,isChanged:true});
    }
    getTime=(dateTime)=>{
        dateTime = new Date(dateTime);
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;

    }
    render(){
                     

        return(
            
            <MainView showScreen={this.state.showScreen} >
                <Container >
                    <HeaderView>
                        <YearText>{this.getTime(this.state.selectedTime)}</YearText>
                    </HeaderView>
                    <DatePicker
                                style={{width:250, backgroundColor:'#ffffff'}}
                                mode="time"
                                minimumDate={new Date('2001-01-01')}
                                maximumDate={new Date('2050-01-01')}
                                date={new Date(this.state.selectedTime)}
                                onDateChange={date => { this.onDateChange(date);}}
                            />
                        <FooterView>
                        <CustomButtom width="70%" onPress={this.CancelClick}>
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