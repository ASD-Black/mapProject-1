import React from "react";
import {Text} from "react-native";
import { View, Button } from "native-base";

import styles from "./FabStyles.js";

export const actionButton = ({onPressAction, route1})=>{
	return (
		<Button style={styles.fabContainer} onPress={onPressAction}>
			<Text style={styles.btnText}> Book </Text>
		</Button>

	);
}

export default  actionButton;