import React from "react";
//import {  Left, Body } from  "native-base";

import {Text, FlatList, ListItem,View, Left, Body, SafeAreaView } from "react-native";
import MapView from "react-native-maps";

import styles from "./mapContainerStyles.js";

import SearchBox from "../SearchBox";
import SearchResult from "../SearchResults";

export const MapContainer = ({region, getInputData, toggleSearchResultModal, getAddressPredictions, resultTypes, predictions, getSelectedAddress, selectedAddress, loc1, loc2, loc3,loc4, drop })=>{

    const {selectedPickUp} = selectedAddress || {};
    const {isDrop} = drop || {};


    return(
        <View style={styles.container}>

            
                { !selectedPickUp && 
                    <MapView 
                        provider={MapView.PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={region}
                    >

                        <MapView.Marker
                            coordinate={region}
                            pinColor="red"
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc1.location.lat, longitude:loc1.location.lng}}
                            pinColor="blue"
                            rotation = {loc1.heading}
                            title="Negombo"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc2.location.lat, longitude:loc2.location.lng}}
                            pinColor="blue"
                            rotation = {loc2.heading}
                            title="Kolpity"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc3.location.lat, longitude:loc3.location.lng}}
                            pinColor="blue"
                            rotation = {loc3.heading}
                            title="Panadura"
                            description="Moving"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc4.location.lat, longitude:loc4.location.lng}}
                            pinColor="blue"
                            rotation = {loc4.heading}
                            title="Ja Ela"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />  

                    </MapView>
                }

                { selectedPickUp && 
                    <MapView 
                        provider={MapView.PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{latitude:selectedAddress.selectedPickUp.location.latitude,
                            longitude:selectedAddress.selectedPickUp.location.longitude,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421}}
                    >                
                        <MapView.Marker
                            coordinate={{latitude:selectedAddress.selectedPickUp.location.latitude, longitude:selectedAddress.selectedPickUp.location.longitude}}
                            pinColor="green"
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc1.location.lat, longitude:loc1.location.lng}}
                            pinColor="blue"
                            rotation = {loc1.heading}
                            title="Negombo"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc2.location.lat, longitude:loc2.location.lng}}
                            pinColor="blue"
                            rotation = {loc2.heading}
                            title="Kolpity"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc3.location.lat, longitude:loc3.location.lng}}
                            pinColor="blue"
                            rotation = {loc3.heading}
                            title="Panadura"
                            description="Moving"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc4.location.lat, longitude:loc4.location.lng}}
                            pinColor="blue"
                            rotation = {loc4.heading}
                            title="Ja Ela"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                    </MapView>
                }

                { isDrop && 
                    <MapView 
                        provider={MapView.PROVIDER_GOOGLE}
                        style={styles.map}
                        initialRegion={{latitude:loc2.location.lat,
                            longitude:loc2.location.lng,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421}}
                    >                
                        <MapView.Marker
                            coordinate={{latitude:selectedAddress.selectedPickUp.location.latitude, longitude:selectedAddress.selectedPickUp.location.longitude}}
                            pinColor="green"
                            title="xx"

                        />

                        <MapView.Marker
                            coordinate={{latitude:loc1.location.lat, longitude:loc1.location.lng}}
                            pinColor="blue"
                            rotation = {loc1.heading}
                            title="Negombo"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc2.location.lat, longitude:loc2.location.lng}}
                            pinColor="blue"
                            rotation = {loc2.heading}
                            title="Kolpity"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc3.location.lat, longitude:loc3.location.lng}}
                            pinColor="blue"
                            rotation = {loc3.heading}
                            title="Panadura"
                            description="Moving"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />

                        <MapView.Marker
                            coordinate={{latitude:loc4.location.lat, longitude:loc4.location.lng}}
                            pinColor="blue"
                            rotation = {loc4.heading}
                            title="Ja Ela"
                            description="Parked"
                            image={require('./bus.png')}
                            anchor={{x: 0.5, y: 0.5}}
                            centerOffset={{x: 0.5, y: 1}}
                            flat={true}
                            // anchor={(0.5,0.5)}
                        />          

                    </MapView>
                }
            
            <SearchBox 
                getInputData={getInputData} 
                toggleSearchResultModal={toggleSearchResultModal}
                getAddressPredictions={getAddressPredictions}
                selectedAddress={selectedAddress}
            />
            {  (resultTypes.pickUp || resultTypes.dropOff) && (predictions.length >=1) &&
            
            <SearchResult predictions={predictions} getSelectedAddress={getSelectedAddress}/>   //err         
            }
        </View>
    )
}

export default MapContainer;