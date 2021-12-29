import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import tw from 'tailwind-react-native-classnames';
import { store } from './store';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// 1)Set up redux(Data Layer) - npm add @reduxjs/toolkit 
// 2)Import Provider and wrap the app with it

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView 
            style={tw`flex-1`}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -61 : 0}>
              <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                  headerShown: false,
                }}/>
                <Stack.Screen name="MapScreen" component={MapScreen} options={{
                  headerShown: false,
                }}/>
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}

