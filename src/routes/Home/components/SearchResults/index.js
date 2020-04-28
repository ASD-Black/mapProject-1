import React, { Component } from "react";
//import {Text} from "react-native";
import {Text} from "react-native";

import { List, ListItem, View, Left, Body} from 'native-base'



import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./SearchResultsStyles.js";

export const SearchResults = ({predictions})=> {
	
		return(
			<View style={styles.searchResultsWrapper}> 
				<List // err
					dataArray={predictions}
					renderItem={(item)=>
						<View>
							<ListItem >
								<Left style={styles.leftContainer}>
									<Icon style={styles.leftIcon} name="location-on" />
								</Left>
								<Body>
									<Text style={styles.primaryText}>{item.primaryText}</Text>
									<Text style={styles.secondaryText}>{item.secondaryText}</Text>
								</Body>
							</ListItem>
						</View>
					}
				/>
			</View>

		);
	
		
};

export default SearchResults;