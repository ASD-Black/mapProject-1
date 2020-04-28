import React from "react";
//import {  Left, Body } from  "native-base";
import {Text, FlatList, ListItem,View, Left, Body, SafeAreaView } from "react-native";
import MapView from "react-native-maps";

import styles from "./mapContainerStyles.js";

import SearchBox from "../SearchBox";
import SearchResult from "../SearchResults";

export const MapContainer = ({region, getInputData, toggleSearchResultModal, getAddressPredictions, resultTypes, predictions})=>{

    return(
        <View style={styles.container}> 
            <MapView 
                provider={MapView.PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
                <MapView.Marker
                    coordinate={region}
                    pinColor="green"
                />

            </MapView>
            <SearchBox 
                getInputData={getInputData} 
                toggleSearchResultModal={toggleSearchResultModal}
                getAddressPredictions={getAddressPredictions}
            />
            {  (resultTypes.pickUp || resultTypes.dropOff) && (predictions.length >=1) &&
            
            <SearchResult predictions={predictions}/>   //err         
            }
        </View>
    )
}

export default MapContainer;