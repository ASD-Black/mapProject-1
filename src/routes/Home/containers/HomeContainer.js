import { connect } from "react-redux";
import Home from "../components/Home"

import {
    getCurrentLocation,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions,
    getSelectedAddress,
    setLocation
} from "../modules/home"

const mapStateToProps = (state) => ({
    region: state.home.region,    
    inputData:state.home.inputData || {},
    resultTypes:state.home.resultTypes || {},
    predictions:state.home.predictions || [],
    selectedAddress:state.home.selectedAddress || {},
    setLoc:state.home.setLoc || {}
});
const mapActionCreators = {
    getCurrentLocation,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions,
    getSelectedAddress,
    setLocation
}

export default connect(mapStateToProps, mapActionCreators)(Home);