import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from "react-native-elements";
import tw from 'tailwind-react-native-classnames';

const NavFavorites = () => {

    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: "Harlem, NY",
        },
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: "Bronx, NY",
        },
    ];
    return (
        <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View 
                style={[tw`bg-gray-200`, { height: 0.5 }]}
            />
        )}
        renderItem={({ item }) => (
            <TouchableOpacity style={tw`flex-row rounded-full p-5`}>
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={item.icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}/>
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
