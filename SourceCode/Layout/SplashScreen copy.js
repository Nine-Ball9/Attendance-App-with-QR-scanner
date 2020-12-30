import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import Svg,{
	Path,
	Symbol,
	Defs,
	LinearGradient,
    Stop,
    Rect,
    Circle
} from 'react-native-svg';


// import SvgComponent from "../assets/images/Splash/"

// import SvgComponent from "../assets/images/Splash/"

const styles = StyleSheet.create({
	LunchBodyOff:{
		display:'none',
	},
	SplashBody: {
		flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
	},
	container:{
        alignItems:"center",
        height:350,
        justifyContent:"space-around",
        flexDirection:'column',
        width:'100%'


	},
	containerLogo:{
		alignItems:'center',
    justifyContent:'center'
	}

});

export default class SplashScreen extends React.Component {

	constructor(props){
		super(props);
		process.nextTick = setImmediate;
	}

	render() {
		return (
			<View style={styles.SplashBody}>
				<View  style={styles.container}>
					
                <Svg width="100%" height="21" viewBox="0 0 375 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width="375" height="21" fill="none"/>
                    <Circle cx="308" cy="17.3567" r="1.5" transform="rotate(-180 308 17.3567)" stroke="#377AA4"/>
                    <Circle cx="75" cy="18.3567" r="1.5" transform="rotate(-180 75 18.3567)" stroke="#377AA4"/>
                    <Circle cx="11" cy="12.3567" r="1.5" transform="rotate(-180 11 12.3567)" stroke="#377AA4"/>
                    <Circle cx="365" cy="12.3567" r="1.5" transform="rotate(-180 365 12.3567)" stroke="#377AA4"/>
                    <Path d="M76 17.7133L128.512 17.7133C129.203 17.7133 129.853 17.3866 130.266 16.8322L135.915 9.23787C136.327 8.6835 136.978 8.35677 137.669 8.35677L232.317 8.35677C232.762 8.35677 233.196 8.49258 233.562 8.74603L245.938 17.3241C246.304 17.5775 246.738 17.7133 247.183 17.7133L307 17.7134" stroke="url(#paint0_linear)"/>
                    <Path d="M12 12.3567L127.012 12.3566C127.703 12.3566 128.353 12.0299 128.766 11.4755L134.415 3.88115C134.827 3.32677 135.478 3.00005 136.169 3.00005L234.856 3.00005C235.276 3.00005 235.688 3.12127 236.041 3.34919L249.459 12.0075C249.812 12.2355 250.224 12.3567 250.644 12.3567L364 12.3567" stroke="url(#paint1_linear)"/>
                    <Defs>
                    <LinearGradient id="paint0_linear" x1="230.444" y1="-34.2454" x2="95.8779" y2="-33.1254" gradientUnits="userSpaceOnUse">
                    <Stop offset="0.150972" stopColor="#377AA4"/>
                    <Stop offset="0.25379" stopColor="#459DCF"/>
                    <Stop offset="0.603675" stopColor="#4D9ECE"/>
                    <Stop offset="0.827312" stopColor="#377AA4"/>
                    </LinearGradient>
                    <LinearGradient id="paint1_linear" x1="228.943" y1="-39.6021" x2="94.3771" y2="-38.4822" gradientUnits="userSpaceOnUse">
                    <Stop offset="0.150972" stopColor="#377AA4"/>
                    <Stop offset="0.25379" stopColor="#459DCF"/>
                    <Stop offset="0.603675" stopColor="#4D9ECE"/>
                    <Stop offset="0.827312" stopColor="#377AA4"/>
                    </LinearGradient>
                    </Defs>
                </Svg>

                <View style={{alignItems:'center',alignContent:'center',justifyContent:'space-between',width:'100%',height:200,flexDirection:'column'}}>


                    <Svg width="100%" height="100%" viewBox="0 0 485 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width="485" height="347" fill="none"/>
                        <Path d="M259.469 151.395C259.814 151.138 260.232 151 260.662 151H315.991C317.798 151 318.678 153.206 317.368 154.45L301.579 169.45C301.207 169.803 300.714 170 300.201 170H269.5C268.395 170 267.5 170.895 267.5 172V188.707C267.5 189.494 267.038 190.208 266.321 190.531L262.069 192.444C260.422 193.185 260.524 195.558 262.229 196.155L266.161 197.531C266.963 197.812 267.5 198.569 267.5 199.419V216C267.5 217.105 268.395 218 269.5 218H300.287C300.748 218 301.195 218.159 301.552 218.451L321.152 234.451C322.609 235.64 321.768 238 319.887 238H260.74C260.262 238 259.801 237.829 259.438 237.519L243.198 223.599C242.755 223.219 242.5 222.664 242.5 222.08V165.006C242.5 164.373 242.799 163.778 243.307 163.4L259.469 151.395Z" fill="#A0C0F3" fillOpacity="0.7"/>
                        <Path d="M170.5 153.5C170.5 152.395 171.395 151.5 172.5 151.5H243.926C245.67 151.5 246.578 153.577 245.394 154.858L230.594 170.858C230.215 171.267 229.683 171.5 229.126 171.5H199C197.895 171.5 197 172.395 197 173.5V181.5C197 182.605 197.895 183.5 199 183.5H227.846C228.25 183.5 228.644 183.622 228.977 183.851L242.04 192.812C243.213 193.617 243.194 195.355 242.004 196.135L228.965 204.673C228.639 204.886 228.258 205 227.869 205H199C197.895 205 197 205.895 197 207V215.5C197 216.605 197.895 217.5 199 217.5H226.684C227.207 217.5 227.709 217.705 228.083 218.07L246.994 236.57C248.275 237.824 247.388 240 245.596 240H172.5C171.395 240 170.5 239.105 170.5 238V153.5Z" fill="#99BAEE" fillOpacity="0.7"/>
                        <Path d="M465.5 52H373.848C372.361 52 370.95 52.6624 370 53.8071L353.5 73.6929C352.55 74.8376 351.139 75.5 349.652 75.5H247.245C245.817 75.5 244.457 76.1107 243.508 77.1782L226.492 96.3218C225.543 97.3893 224.183 98 222.755 98H162.275C160.83 98 159.455 98.6257 158.505 99.7157L89 179.5" stroke="url(#paint0_linear)" strokeWidth="8"/>
                        <Path d="M332 52H239.968C238.412 52 236.945 52.7244 235.999 53.9596L221.001 73.5404C220.055 74.7756 218.588 75.5 217.032 75.5H151.253C149.82 75.5 148.457 76.1143 147.508 77.1871L57 179.5" stroke="url(#paint1_linear)" strokeWidth="8"/>
                        <Path d="M208.5 52H141.783C140.333 52 138.954 52.6295 138.005 53.7253L29 179.5" stroke="url(#paint2_linear)" strokeWidth="8"/>
                        <Path d="M336 124.5H168.814C167.346 124.5 165.952 125.145 165.002 126.264L113 187.5" stroke="url(#paint3_linear)" strokeWidth="8"/>
                        <Path d="M348.5 266.5C348.5 269.377 346.374 271.5 344 271.5C341.626 271.5 339.5 269.377 339.5 266.5C339.5 263.623 341.626 261.5 344 261.5C346.374 261.5 348.5 263.623 348.5 266.5Z" stroke="#4D9ECE" strokeOpacity="0.4" strokeWidth="3"/>
                        <Path d="M88.5 205.5C88.5 208.377 86.3745 210.5 84 210.5C81.6255 210.5 79.5 208.377 79.5 205.5C79.5 202.623 81.6255 200.5 84 200.5C86.3745 200.5 88.5 202.623 88.5 205.5Z" stroke="#6C9DBE" strokeWidth="3"/>
                        <Path d="M59.5 205.5C59.5 208.377 57.3745 210.5 55 210.5C52.6255 210.5 50.5 208.377 50.5 205.5C50.5 202.623 52.6255 200.5 55 200.5C57.3745 200.5 59.5 202.623 59.5 205.5Z" stroke="#6C9DBE" strokeWidth="3"/>
                        <Path d="M31.5 208.5C31.5 211.377 29.3745 213.5 27 213.5C24.6255 213.5 22.5 211.377 22.5 208.5C22.5 205.623 24.6255 203.5 27 203.5C29.3745 203.5 31.5 205.623 31.5 208.5Z" stroke="#6C9DBE" strokeWidth="3"/>
                        <Path d="M339.5 267H169.296C167.838 267 166.454 266.364 165.504 265.259L112 203" stroke="url(#paint4_linear)" strokeWidth="8"/>
                        <Path d="M357 292H162.751C161.32 292 159.957 291.386 159.008 290.315L87 209" stroke="url(#paint5_linear)" strokeWidth="8"/>
                        <Path d="M131.5 292L58 209" stroke="url(#paint6_linear)" strokeWidth="8"/>
                        <Path d="M103.5 295L30 212" stroke="url(#paint7_linear)" strokeWidth="8"/>
                        <Path d="M448.5 75H381.601C380.257 75 378.97 75.541 378.03 76.5011L356.97 97.9989C356.03 98.959 354.743 99.5 353.399 99.5H256" stroke="url(#paint8_linear)" strokeWidth="8"/>
                        <Path d="M31.5 182.5C31.5 185.377 29.3745 187.5 27 187.5C24.6255 187.5 22.5 185.377 22.5 182.5C22.5 179.623 24.6255 177.5 27 177.5C29.3745 177.5 31.5 179.623 31.5 182.5Z" stroke="#377AA4" strokeWidth="3"/>
                        <Path d="M58.5 182.5C58.5 185.377 56.3745 187.5 54 187.5C51.6255 187.5 49.5 185.377 49.5 182.5C49.5 179.623 51.6255 177.5 54 177.5C56.3745 177.5 58.5 179.623 58.5 182.5Z" stroke="#377AA4" strokeWidth="3"/>
                        <Path d="M90.5 182.5C90.5 185.377 88.3745 187.5 86 187.5C83.6255 187.5 81.5 185.377 81.5 182.5C81.5 179.623 83.6255 177.5 86 177.5C88.3745 177.5 90.5 179.623 90.5 182.5Z" stroke="#377AA4" strokeWidth="3"/>
                        <Path d="M216.5 51.5C216.5 54.3767 214.374 56.5 212 56.5C209.626 56.5 207.5 54.3767 207.5 51.5C207.5 48.6233 209.626 46.5 212 46.5C214.374 46.5 216.5 48.6233 216.5 51.5Z" stroke="#4A9ECE" strokeWidth="3"/>
                        <Path d="M256.5 99.5C256.5 102.377 254.374 104.5 252 104.5C249.626 104.5 247.5 102.377 247.5 99.5C247.5 96.6233 249.626 94.5 252 94.5C254.374 94.5 256.5 96.6233 256.5 99.5Z" stroke="#459DCF" strokeWidth="3"/>
                        <Path d="M340.5 52.5C340.5 55.3767 338.374 57.5 336 57.5C333.626 57.5 331.5 55.3767 331.5 52.5C331.5 49.6233 333.626 47.5 336 47.5C338.374 47.5 340.5 49.6233 340.5 52.5Z" stroke="#418AB7" strokeWidth="3"/>
                        <Path d="M344.5 124.5C344.5 127.377 342.374 129.5 340 129.5C337.626 129.5 335.5 127.377 335.5 124.5C335.5 121.623 337.626 119.5 340 119.5C342.374 119.5 344.5 121.623 344.5 124.5Z" stroke="#4D9ECE" strokeWidth="3"/>
                        <Path d="M177 195.5L190.5 199.5V221L177 231V195.5Z" fill="#071E50"/>
                        <Path d="M179 293L192.5 297V301.5H179V293Z" fill="url(#paint9_linear)"/>
                        <Path d="M192.5 189H226.5L236.5 194.5L226.5 198.5H191L181 194.5L192.5 189Z" fill="#071E50"/>
                        <Path d="M177.5 158L191 167V187.5L177.5 193.5V158Z" fill="#071E50"/>
                        <Path d="M180.5 157H237.5L228 165H192L180.5 157Z" fill="#071E50"/>
                        <Path d="M192 223H226L239 232H179L192 223Z" fill="#071E50"/>
                        <Path d="M247.5 195.5L261 200.5V221L253.5 226L247.5 222.5V195.5Z" fill="#071E50"/>
                        <Path d="M254 162L261.5 167V188.5L248 193V167L254 162Z" fill="#071E50"/>
                        <Path d="M262.5 157H308.5L297.5 165H262.5L256.5 161L262.5 157Z" fill="#071E50"/>
                        <Path d="M261.459 251.919C261.81 251.647 262.24 251.5 262.684 251.5H313.925C315.802 251.5 316.645 253.851 315.197 255.044L303.054 265.044C302.696 265.339 302.246 265.5 301.782 265.5H268.5C267.395 265.5 266.5 266.395 266.5 267.5V286.8C266.5 287.539 266.093 288.217 265.441 288.565L262.795 289.976C261.295 290.776 261.414 292.966 262.994 293.597L265.243 294.497C266.002 294.801 266.5 295.536 266.5 296.354V303.3C266.5 304.039 266.093 304.717 265.441 305.065L259 308.5L254.053 311.198C253.693 311.395 253.282 311.476 252.874 311.43L249.388 311.043C249.133 311.015 248.875 311.05 248.637 311.145V311.145C247.614 311.555 246.5 310.801 246.5 309.698V264.481C246.5 263.862 246.786 263.278 247.276 262.899L261.459 251.919Z" fill="url(#paint10_linear)" fillOpacity="0.8"/>
                        <Path d="M170.5 250.5C170.5 249.395 171.395 248.5 172.5 248.5H243.378C245.048 248.5 245.983 250.426 244.949 251.738L235.101 264.238C234.721 264.719 234.142 265 233.53 265H199.5C198.395 265 197.5 265.895 197.5 267V279.5C197.5 280.605 198.395 281.5 199.5 281.5H229.386C229.786 281.5 230.177 281.62 230.508 281.844L242.628 290.055C243.904 290.919 243.764 292.84 242.378 293.511L230.413 299.3C230.141 299.432 229.843 299.5 229.542 299.5H199.5C198.395 299.5 197.5 300.395 197.5 301.5V303C197.5 304.105 196.605 305 195.5 305H172.5C171.395 305 170.5 304.105 170.5 303V250.5Z" fill="url(#paint11_linear)" fillOpacity="0.5"/>
                        <Path d="M194 286.5H228L238 292L228 296H192.5L182.5 292L194 286.5Z" fill="url(#paint12_linear)" fillOpacity="0.2"/>
                        <Path d="M179 255.5L192.5 264.5V285L179 291V255.5Z" fill="url(#paint13_linear)" fillOpacity="0.3"/>
                        <Path d="M182 254H239L229.5 262H193.5L182 254Z" fill="#344F8B" fillOpacity="0.3"/>
                        <Path d="M249 293L262.5 298V304.5L249 306.5V293Z" fill="url(#paint14_linear)" fillOpacity="0.2"/>
                        <Path d="M255.5 259.5L263 264.5V286L249.5 290.5V264.5L255.5 259.5Z" fill="url(#paint15_linear)" fillOpacity="0.3"/>
                        <Path d="M264 254.5H310L299 262.5H264L258 258.5L264 254.5Z" fill="#344F8B" fillOpacity="0.3"/>
                        <Path d="M262.5 223H296.5L310 232H262.5L257 227.5L262.5 223Z" fill="#071E50"/>
                        <Defs>
                        <LinearGradient id="paint0_linear" x1="89" y1="182.5" x2="466" y2="179" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.150972" stopColor="#377AA4"/>
                            <Stop offset="0.25379" stopColor="#459DCF"/>
                            <Stop offset="0.603675" stopColor="#4D9ECE"/>
                            <Stop offset="0.827312" stopColor="#377AA4"/>
                        </LinearGradient>
                        <LinearGradient id="paint1_linear" x1="57" y1="182.5" x2="434" y2="179" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.150972" stopColor="#377AA4"/>
                            <Stop offset="0.25379" stopColor="#459DCF"/>
                            <Stop offset="0.603675" stopColor="#4D9ECE"/>
                            <Stop offset="0.827312" stopColor="#377AA4"/>
                        </LinearGradient>
                        <LinearGradient id="paint2_linear" x1="29" y1="182.5" x2="406" y2="179" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.150972" stopColor="#377AA4"/>
                            <Stop offset="0.25379" stopColor="#459DCF"/>
                            <Stop offset="0.603675" stopColor="#4D9ECE"/>
                            <Stop offset="0.827312" stopColor="#377AA4"/>
                        </LinearGradient>
                        <LinearGradient id="paint3_linear" x1="109" y1="189.5" x2="486" y2="186" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.150972" stopColor="#377AA4"/>
                            <Stop offset="0.25379" stopColor="#459DCF"/>
                            <Stop offset="0.603675" stopColor="#4D9ECE"/>
                            <Stop offset="0.827312" stopColor="#377AA4"/>
                        </LinearGradient>
                        <LinearGradient id="paint4_linear" x1="132.5" y1="307.5" x2="509.5" y2="304" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.150972" stopColor="#377AA4" stopOpacity="0.55"/>
                            <Stop offset="0.334534" stopColor="#459DCF" stopOpacity="0.4"/>
                            <Stop offset="0.646092" stopColor="#4D9ECE" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint5_linear" x1="110.5" y1="316.5" x2="487.5" y2="313" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.0520833" stopColor="#6C9DBE"/>
                            <Stop offset="0.276042" stopColor="#459DCF" stopOpacity="0.4"/>
                            <Stop offset="0.646092" stopColor="#4D9ECE" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint6_linear" x1="95" y1="259" x2="158.5" y2="323" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.0680079" stopColor="#6C9DBE"/>
                            <Stop offset="0.796875" stopColor="#4D9ECE" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint7_linear" x1="67" y1="262" x2="130.5" y2="326" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.0680079" stopColor="#6C9DBE"/>
                            <Stop offset="0.520833" stopColor="#4D9ECE" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint8_linear" x1="251.695" y1="100.484" x2="657.303" y2="92.2482" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.25379" stopColor="#459DCF"/>
                            <Stop offset="0.447917" stopColor="#377AA4"/>
                        </LinearGradient>
                        <LinearGradient id="paint9_linear" x1="185.75" y1="293" x2="185.75" y2="301.5" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.765625" stopColor="#071E50" stopOpacity="0.4"/>
                            <Stop offset="1" stopColor="#071E50" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint10_linear" x1="283" y1="251.5" x2="283" y2="312" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#99BAEE"/>
                            <Stop offset="1" stopColor="#99BAEE" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint11_linear" x1="209" y1="248.5" x2="209" y2="305" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#99BAEE"/>
                            <Stop offset="1" stopColor="#99BAEE" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint12_linear" x1="210.25" y1="286.5" x2="210.25" y2="296" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.109375" stopColor="#344F8B" stopOpacity="0.8"/>
                            <Stop offset="0.880208" stopColor="#344F8B" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint13_linear" x1="185.75" y1="255.5" x2="185.75" y2="291" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.661458" stopColor="#344F8B"/>
                            <Stop offset="1" stopColor="#344F8B" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint14_linear" x1="255.75" y1="293" x2="255.75" y2="306.5" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.364583" stopColor="#344F8B" stopOpacity="0.7"/>
                            <Stop offset="0.802083" stopColor="#344F8B" stopOpacity="0"/>
                        </LinearGradient>
                        <LinearGradient id="paint15_linear" x1="256.25" y1="259.5" x2="256.25" y2="290.5" gradientUnits="userSpaceOnUse">
                            <Stop offset="0.385417" stopColor="#344F8B"/>
                            <Stop offset="1" stopColor="#344F8B" stopOpacity="0"/>
                        </LinearGradient>
                        </Defs>
                    </Svg>
                    
                </View>
                <Text style={{color:'#071E50',fontSize:18,fontWeight:'bold'}}>Technological University ( Hmawbi )</Text>
                <Text style={{color:'#99BAEE',fontSize:15,fontWeight:'bold'}}>Student Attendance System</Text>
                <Svg width="100%" height="21" viewBox="0 0 375 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width="375" height="21" fill="none"/>
                    <Circle cx="65" cy="5" r="1.5" stroke="#377AA4"/>
                    <Circle cx="298" cy="4" r="1.5" stroke="#377AA4"/>
                    <Circle cx="362" cy="10" r="1.5" stroke="#377AA4"/>
                    <Circle cx="8" cy="10" r="1.5" stroke="#377AA4"/>
                    <Path d="M297 4.64342L244.488 4.64337C243.797 4.64337 243.147 4.97009 242.734 5.52447L237.085 13.1188C236.673 13.6732 236.022 13.9999 235.331 13.9999H140.683C140.238 13.9999 139.804 13.8641 139.438 13.6107L127.062 5.03263C126.696 4.77917 126.262 4.64337 125.817 4.64337L66 4.64331" stroke="url(#paint0_linear)"/>
                    <Path d="M361 10L245.988 10.0001C245.297 10.0001 244.647 10.3268 244.234 10.8812L238.585 18.4755C238.173 19.0299 237.522 19.3566 236.831 19.3566H138.144C137.724 19.3566 137.312 19.2354 136.959 19.0075L123.541 10.3491C123.188 10.1212 122.776 10 122.356 10H9" stroke="url(#paint1_linear)"/>
                    <Defs>
                    <LinearGradient id="paint0_linear" x1="142.556" y1="56.6021" x2="277.122" y2="55.4821" gradientUnits="userSpaceOnUse">
                        <Stop offset="0.150972" stopColor="#377AA4"/>
                        <Stop offset="0.25379" stopColor="#459DCF"/>
                        <Stop offset="0.603675" stopColor="#4D9ECE"/>
                        <Stop offset="0.827312" stopColor="#377AA4"/>
                    </LinearGradient>
                    <LinearGradient id="paint1_linear" x1="144.057" y1="61.9588" x2="278.623" y2="60.8389" gradientUnits="userSpaceOnUse">
                        <Stop offset="0.150972" stopColor="#377AA4"/>
                        <Stop offset="0.25379" stopColor="#459DCF"/>
                        <Stop offset="0.603675" stopColor="#4D9ECE"/>
                        <Stop offset="0.827312" stopColor="#377AA4"/>
                    </LinearGradient>
                    </Defs>
                </Svg>

				</View>
		 	</View>
		);
	}
}