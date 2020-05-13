import React from "react";
import {View, Text} from "react-native";
//import { Container } from "native-base";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

import MapContainer from "./MapContainer"
import { timing } from "react-native-reanimated";

import ActionButton from "./actionButton";

class Home extends React.Component{

    componentDidMount(){
        this.props.getCurrentLocation();
    }

    constructor(props) {
        super(props);
        this.state = {
          selected1: undefined,
          //selected2: "IN"
        };
      }
      onValueChange(value: string) {
        this.setState({
          selected1: value,
          //selected2: value
        });
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
                <Form>
                    <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)}
                    >
                    <Picker.Item label="Select Route" value="Select Route" />
                    <Picker.Item label="Negombo" value="Select Route" />
                    <Picker.Item label="Ja Ela" value="Ja Ela" />
                    <Picker.Item label="Kolpity" value="Kolpity" />
                    <Picker.Item label="Panadura" value="Panadura" />
                    </Picker>
                </Form>
                {/* <Form>
                    <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange.bind(this)}
                    >
                    <Picker.Item label="Pick UP" value="IN" />
                    <Picker.Item label="Drop OFF" value="OUT" />
                    </Picker>
                </Form> */}
                {this.props.region.latitude && 
                <MapContainer //err
                    region={this.props.region} 
                    getInputData={this.props.getInputData}
                    toggleSearchResultModal={this.props.toggleSearchResultModal}
                    getAddressPredictions={this.props.getAddressPredictions}
                    resultTypes={this.props.resultTypes}
                    predictions={this.props.predictions}
                    getSelectedAddress={this.props.getSelectedAddress}
                    selectedAddress={this.props.selectedAddress}
                />
                }
            <ActionButton onPressAction={this.props.setLocation} />
            </Container>
        );
        
    }
}

export default Home; 