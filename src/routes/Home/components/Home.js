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
        this.timer = setInterval(()=> this.getBusLocation(), 10000)
       }
      
      async getBusLocation(){
        console.log("CALLING...");

        var details = {
            'hash':'8b64f84b0b87681b0ac92a81a565670b',
            'list_blocked':'true',
            'trackers':'[473755,473754,473757,473758]'
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('https://esfm.dialog.lk/api-v2/tracker/get_states',{
            method: 'POST',
            headers: {
              'Origin':'https://esfm.dialog.lk',
              'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
              'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
              'Accept':'*/*'
            },
              body: formBody
           
          })
          .then((response) => response.json())
          .then((res) => {
            console.log("res")
            console.log(res)
            console.log("/res")
            if(res.success === true){
              // alert(res.succmessage);
            //   let busLocation = res.states[473755].gps;
              console.log("busLocation.location.lat")
              console.log(res.states[473755].gps.location.lat)
              this.setState({
                loc1: res.states[473754].gps,
                loc2: res.states[473755].gps, 
                loc3: res.states[473757].gps,
                loc4: res.states[473758].gps
              });
            }
            else if(res.success === false){
              // alert(res.errmessage);
            }
          })
          .done();
      
      }


    constructor(props) {
        super(props);
        this.state = {
          selected1: undefined,
          loc1: {
            heading: 209,
            location: {
                lat: 6.9151983, 
                lng: 79.9733033
            }
          },
          loc2: {
            heading: 60,
            location: {
                lat: 6.9152983, 
                lng: 79.9773033
            }
          },
          loc3: {
            heading: 212,
            location: {
                lat: 6.9151983, 
                lng: 79.9733033
            }
          },
          loc4: {
            heading: 265,
            location: {
                lat: 7.05757, 
                lng: 79.9578766
            }
          },
          //selected2: "IN"
        };
      }
      onValueChange(value: string) {
        // get relevent bus location coordinates from dialog api
        // set a marker for location
        // move map region to this region
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
                <Form>
                    <Picker 
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined}}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange.bind(this)}
                    >
                    <Picker.Item label="Pick UP" value="IN" />
                    <Picker.Item label="Drop OFF" value="OUT" />
                    </Picker>
                </Form>
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
                    loc1={this.state.loc1}
                    loc2={this.state.loc2}
                    loc3={this.state.loc3}
                    loc4={this.state.loc4}
                    drop={this.state.selected1}
                />
                
                }
                
            <ActionButton onPressAction={this.props.setLocation} route1={this.state.selected1} />
            </Container>
        );
        
    }
}

export default Home; 