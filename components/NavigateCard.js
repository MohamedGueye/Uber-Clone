import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from "react-native-elements";


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Mohamed</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                <GooglePlacesAutocomplete
                    styles={toInputBoxStyles} 
                    placeholder="Enter Destination"
                    debounce={400}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, details = null) => {
                        // Push data into data layer
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description
                        }));

                        navigation.navigate("RideOptionsCard");
                    }}  
                />
                </View>
                <NavFavorites />
            </View>

            <View style={tw`flex-row bg-white justify-evenly border-t border-gray-100`}>
                <TouchableOpacity onPress={() => navigation.navigate("RideOptionsCard")} style={tw`flex flex-row bg-black justify-between px-4 py-3 rounded-full w-24`}>
                    <Icon name="car" type="font-awesome" color="white" size={16}/>
                    <Text style={tw`text-white text-center`}>Ride</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between px-4 py-3 rounded-full w-24`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
});
