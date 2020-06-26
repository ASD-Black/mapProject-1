import update from "react-addons-update"

import constants from "./actionConstants"
import { Dimensions } from "react-native"
import RNGooglePlaces from "react-native-google-places"
navigator.geolocation = require('@react-native-community/geolocation');
//pissu 
//--------------------------
//Constants
//--------------------------
const {
	GET_CURRENT_LOCATION,
	GET_INPUT,
	TOGGLE_SEARCH_RESULT,
	GET_ADDRESS_PREDICTIONS,
	GET_SELECTED_ADDRESS,
	SET_LOCATION
} = constants;




const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA

//--------------------------
//Actions
//--------------------------
export function getCurrentLocation(){
	return(dispatch)=>{
		navigator.geolocation.getCurrentPosition(
			(position)=>{
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
		);
	}
}

export function getInputData(payload){
	return{
		type:GET_INPUT,
		payload
	}
}

export function toggleSearchResultModal(payload){
	return{
		type:TOGGLE_SEARCH_RESULT,
		payload
	}
}

export function getAddressPredictions(){
	return(dispatch, store)=>{
		let userInput = store().home.resultTypes.pickUp ? store().home.inputData.pickUp : store().home.inputData.dropOff;
		RNGooglePlaces.getAutocompletePredictions(userInput,
			{
				country:"LK" 
			}
		)
		.then((results)=>
			dispatch({
				type:GET_ADDRESS_PREDICTIONS,
				payload:results
			})
		)
		.catch((error)=> console.log(error.message));
	};
}

export function getSelectedAddress(payload){
	return(dispatch, store)=>{
		RNGooglePlaces.lookUpPlaceByID(payload)
		.then((results)=>{
			dispatch({
				type:GET_SELECTED_ADDRESS,
				payload:results
			})
		})
		.catch((error)=> console.log(error.message));
	}
}

export function setLocation(){
	return (dispatch, store)=>{
		console.log("store()")
		console.log(store())
		fetch('http://192.168.8.101:3000/api/markTheLocations',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
            body: JSON.stringify({
				placeAdress:store().home.selectedAddress.selectedPickUp.address,
				placeName:store().home.selectedAddress.selectedPickUp.name,
				latitude:store().home.selectedAddress.selectedPickUp.location.latitude,
				longitude:store().home.selectedAddress.selectedPickUp.location.longitude,
				
				action_status: "IN",
				journey_status: "incom",
				date: "2020-03-27 13:36:48",
				RegNo: "IT16130326",
				route: "Kolpity"
			})
         
        })
        .then((response) => response.json())
        .then((res) => {
          
          if(res.success === true){
            
            alert(res.succmessage);
            
          }
          else if(res.success === false){
              alert(res.errmessage);
          }
        })
        .done();

	};
}

//--------------------------
//Action Handlers
//--------------------------
function handleGetCurrentLocation(state, action){
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
			latitudeDelta:{
				$set:LATITUDE_DELTA
			},
			longitudeDelta:{
				$set:LONGITUDE_DELTA
			}
		}
	})
}

function handleGetInputDate(state, action){
	const { key, value } = action.payload;
	return update(state, {
		inputData:{
			[key]:{
				$set:value
			}
		}
	});
}

function handleToggleSearchResult(state, action){
	if(action.payload === "pickUp"){
		return update(state, {
			resultTypes:{
				pickUp:{
					$set:true,
				},
				dropOff:{
					$set:false
				}
			},
			predictions:{
				$set:{}
			}

		});
	}
	if(action.payload === "dropOff"){
		return update(state, {
			resultTypes:{
				pickUp:{
					$set:false,
				},
				dropOff:{
					$set:true
				}
			},
			predictions:{
				$set:{}
			}

		});
	}

}

function handleGetAddressPredictions(state, action){
	return update(state, {
		predictions:{
			$set:action.payload
		}
	})
}

function handleGetSelectedAddress(state, action){
	let selectedTitle = state.resultTypes.pickUp ? "selectedPickUp" : "selectedDropOff"
	return update(state, {
		selectedAddress:{
			[selectedTitle]:{
				$set:action.payload  
			}	
		},
		resultTypes:{
			pickUp:{
				$set:false
			},
			dropOff:{
				$set:false
			}
		} 
	})
}

function handleSetLocation(state, action){
	return update(state, {
		setLoc:{
			$set:action.payload
		}
	})
}

const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION:handleGetCurrentLocation,
	GET_INPUT:handleGetInputDate,
	TOGGLE_SEARCH_RESULT:handleToggleSearchResult,
	GET_ADDRESS_PREDICTIONS:handleGetAddressPredictions,
	GET_SELECTED_ADDRESS:handleGetSelectedAddress,
	SET_LOCATION:handleSetLocation
}

const initialState = {
	region:{},
	inputData:{},
	resultTypes:{},
	selectedAddress:{},
}; 


export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}