import React,{ Component } from 'react';

class CheckInController extends Component{
    constructor(props){
        super(props);
        //const { navigation } = this.props;
        var today = new Date();
		this.state={
            showCalendar:false,
            showTimePicker: false,
            selectedDate:today.getTime(),
            selectedTime:today.getTime(),
        };
    }
    
    
}

 export {
    CheckInController
}