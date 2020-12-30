import React, { Component} from 'react';
import{ Animated,
        Easing } from 'react-native';

        
//import { createStackNavigator } from 'react-navigation-stack';
//import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChooseLoginTypeScreen from './Screens/ChooseLoginTypeScreen';
//import AddIncomeScreen from './Screens/AddIncome/AddIncomeScreen';
//import AddExpenseScreen from './Screens/AddExpense/AddExpenseScreen';
//import CheckTransactionsScreen from './Screens/CheckTransactions/CheckTransactionsScreen';
//import ReportingScreen from './Screens/Reporting/ReportingScreen';

//import Sound from 'react-native-sound';
//const requireAudio = require('../assets/audio/bg.mp3');

  
  /*
  ***Right to left***
   screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const width = layout.initWidth;
        const { index, route } = scene
        const params = route.params || {}; // <- That's new
        const transition = params.transition || 'default'; // <- That's new
        return {
          collapseExpand: CollapseExpand(index, position),
          default: SlideFromRight(index, position, width),
        }[transition];
      },
   */
  
  /*
 const TransitionConfiguration = () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const width = layout.initWidth;
        const { index, route } = scene
        const params = route.params || {}; // <- That's new
        const transition = params.transition || 'default'; // <- That's new
        return {
          collapseExpand: CollapseExpand(index, position),
          default: SlideFromRight(index, position, width),
        }[transition];
      },
    }
  }*/
  /*
  
const RootStack = createStackNavigator(
    {
        ChooseLoginTypeScreen : ChooseLoginTypeScreen
    },{
      initialRouteName: 'ChooseLoginTypeScreen',
    }
);
const Nagivator = createAppContainer(RootStack);
*/

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="ChooseLoginTypeScreen"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="ChooseLoginTypeScreen"
        component={ChooseLoginTypeScreen}
        options={{ title: 'My app' }}
      />
      
    </Stack.Navigator>
  );
}
//const Nagivator = NavigationContainer(RootStack);
//export default Nagivator;
/*
/*
//const Nagivator = createAppContainer(RootStack);
const Nagivator = createStackNavigator({
  ChooseLoginTypeScreen: ChooseLoginTypeScreen
}, {
  initialRouteName: 'ChooseLoginTypeScreen',
});
*/
//const Stack = createStackNavigator();
export default class Nagivator extends React.Component {

	constructor(props){
        super(props);
       
    }//end constructor
    
	render() {
        
		return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ChooseLoginTypeScreen" component={ChooseLoginTypeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
		);
	}
}