import React, {Component} from 'react';
import {Dimensions,Text, StyleSheet,  View,StatusBar} from 'react-native';

import LogoLayout from './SourceCode/Layout/LogoLayout';
import ChooseLoginTypeScreen from './SourceCode/Screens/ChooseLoginType/ChooseLoginTypeScreen';
import StudentLoginScreen from './SourceCode/Screens/Student/StudentLogin/StudentLoginScreen';
import ChooseSubjectScreen from './SourceCode/Screens/Student/ChooseSubject/ChooseSubjectScreen';
import AttendanceScreen from './SourceCode/Screens/Student/Attendance/AttendanceScreen';
import CheckInScreen from './SourceCode/Screens/Student/CheckIn/CheckInScreen';
import CheckOutScreen from './SourceCode/Screens/Student/CheckOut/CheckOutScreen';
//import ScanQRScreen from './SourceCode/Screens/ScanQR/ScanQRScreen';

import TimeTableScreen from './SourceCode/Screens/Student/TimeTable/TimeTableScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
const isTablet = (aspectRatio>1.6?false:true);

let headerHeight = (isTablet?70:60);
/*
const RootStack = createStackNavigator(
  {
    Home: {
      ChooseLoginTypeScreen: ChooseLoginTypeScreen,
      navigationOptions: { title: 'My app' },
    }
    
  },
  {
    initialRouteName: 'ChooseLoginTypeScreen',
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  }
);*/



import SplashScreen from './SourceCode/Layout/SplashScreen';

import styled from 'styled-components/native';
//import {StatusBar} from 'react-native';
// import RatingPopup from "./Components/RatingPopup";
const Container = styled.View`
  display:flex;
  flexDirection: column;
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  flexWrap: wrap;
`
const Container1 = styled.View`
  display:flex;
  flexDirection: column;
  height: ${100}px;
  width: ${Dimensions.get('window').width}px;
  flexWrap: wrap;
`
const HeaderStyle = {
  headerStyle:{
  backgroundColor:'#071E50',
  height:headerHeight,
  headerTitleStyle:{
    color:'#ffffff',
    fontFamily:'Roboto',
    fontSize:15,
    textAlign:'center'
}

},
};
const navigationOptions = {
  headerShown: true,
  title:'Atte ndance',
  
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

function StudentAttendance(){
  return (
    <Stack.Navigator
          
          >
          <Stack.Screen
              name="ChooseSubjectScreen"
              component={ChooseSubjectScreen}
              options={ChooseSubjectScreen.navigationOptions}
            />
          <Stack.Screen
              name="AttendanceScreen"
              component={AttendanceScreen}
              options={AttendanceScreen.navigationOptions}
          />
          <Stack.Screen
            name="CheckInScreen"
            component={CheckInScreen}
            options={CheckInScreen.navigationOptions}
          />
          <Stack.Screen
            name="CheckOutScreen"
            component={CheckOutScreen}
            options={CheckOutScreen.navigationOptions}
          />
    </Stack.Navigator>
  );
}
function StudentHome() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor:'#1346B6',
        activeTintColor: '#ffffff',
        inactiveBackgroundColor:'#071E50',
        inactiveTintColor:'white'
      }}
    >
      <Tab.Screen name="StudentAttendance" title="ok" component={StudentAttendance} 
          options={{
            tabBarLabel: 'Attendance',
            tabBarIcon: ({ color, size }) => (
             <View>
              <Icon name="clock" size={30} color="#ffffff" />
             </View>
            ),
            style:{
              backgroundColor:'red'
            }
          }}
         />
      <Tab.Screen name="StudentTimeTable"
      options={{
            tabBarLabel: 'Time Table',
            tabBarIcon: ({ color, size }) => (
             <View>
              <Icon name="calendar-alt" size={30} color="#ffffff" />
             </View>
            ),
            style:{
              backgroundColor:'red'
            }
          }}
          component={TimeTableScreen} />
    </Tab.Navigator>
  );
}

type Props = {};
export default class App extends Component<Props> {
  constructor(Props){
    super(Props);
    
    this.state = {
      splashState: true, // if false it is calculator state
      Layout : '', //Orientation  -> 'L' for Landscape 'P' for Portrait
      screenHeight : '', //screen height
      screenWidth : '', //screen width
    }
  }
  componentDidMount(){
    this.DetectOrientation();
    setTimeout(this.tick, 3000,this);
  }

  
  tick(me) {
    me.setState({splashState:false,});
    
  }

  DetectOrientation(){
    if(this.state.screenWidth > this.state.screenHeight)
    {
        // Write Your own code here, which you want to execute on Landscape Mode.
        this.setState({
            Layout : 'L' // Landscape
        });
    }
    else{
        // Write Your own code here, which you want to execute on Portrait Mode.
        this.setState({
          Layout : 'P' //Portrait
        });
    }
  } 

  
  render() {
    return (
      <>
      <StatusBar hidden/>
      {this.state.splashState?
        <Container>
        
			
        
          <SplashScreen show={this.state.splashState}  />
        
        
        
		 	</Container>
      :
      <>
      
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ChooseLoginTypeScreen"
            screenOptions={{
              cardOverlayEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                  }),
                }
              }),
            }}
            mode="modal"
          >
          
            <Stack.Screen
              name="ChooseLoginTypeScreen"
              component={ChooseLoginTypeScreen}
              options={ChooseLoginTypeScreen.navigationOptions}
            />
            <Stack.Screen
              name="StudentLoginScreen"
              component={StudentLoginScreen}
              options={StudentLoginScreen.navigationOptions}
            />
            
            <Stack.Screen
              name="StudentHome"
              component={StudentHome}
              options={ChooseSubjectScreen.navigationOptions}
            />
            
            
          </Stack.Navigator>
          
        </NavigationContainer>
       
        <LogoLayout></LogoLayout>
       </>
      }
      </>
    );
    // <LogoLayout></LogoLayout>
  }
}

const styles = StyleSheet.create({
  conTainer: {
		display:'flex',
		flexDirection: 'column',
		height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor:'#ffff',

    
		
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
 
  TextStyle :{
   fontSize : 20,
   color : '#000'
  }
});