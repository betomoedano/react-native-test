import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";
import { View, Image, Text,StyleSheet } from "react-native";


const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel:false,
                style: {
                    backgroundColor: "#fafafa",
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", top: 10}}>
                            <Image 
                                source={require("../assets/Icons/fluent_home-24-regular.png")}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor: focused ? 'blue' : 'gray'
                                }}
                            />
                            <Text 
                                style={{color: focused ? 'blue' : 'gray'}}>
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="Chat" 
                component={Chat}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", top: 10}}>
                            <Image 
                                source={require("../assets/Icons/chat_bubble_outline.png")}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor: focused ? 'blue' : 'gray'
                                }}
                            />
                            <Text 
                                style={{color: focused ? 'blue' : 'gray'}}>
                                Chat
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", top: 10}}>
                            <Image 
                                source={require("../assets/Icons/account_circle.png")}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor: focused ? 'blue' : 'gray'
                                }}
                            />
                            <Text 
                                style={{color: focused ? 'blue' : 'gray'}}>
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={{flex:1, alignItems:"center", justifyContent:"center", top: 10}}>
                            <Image 
                                source={require("../assets/Icons/settings.png")}
                                resizeMode="contain"
                                style={{
                                    width:25,
                                    height: 25,
                                    tintColor: focused ? 'blue' : 'gray'
                                }}
                            />
                            <Text 
                                style={{color: focused ? 'blue' : 'gray'}}>
                                Settings
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({

});
export default Tabs;

