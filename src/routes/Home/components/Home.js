import React from "react";
import {View, Text} from "react-native";
import { Container } from "native-base";

import MapContainer from "./MapContainer"
import { timing } from "react-native-reanimated";

class Home extends React.Component{

    componentDidMount(){
        this.props.getCurrentLocation();
    }

    render(){
        const region = {
            latitude:7.608403,
            longitude:80.084385,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }
        return(
            <Container>
                {this.props.region.latitude && 
                <MapContainer //err
                    region={this.props.region} 
                    getInputData={this.props.getInputData}
                    toggleSearchResultModal={this.props.toggleSearchResultModal}
                    getAddressPredictions={this.props.getAddressPredictions}
                    resultTypes={this.props.resultTypes}
                    predictions={this.props.predictions}/>
                }
            </Container>
        );
        
    }
}

export default Home; 