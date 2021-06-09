import React from "react"
import { Image, Text, View,StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import tailwind from "tailwind-rn"

function MarketView(props) {
    return (
        <View style={tailwind("border-2 border-gray-200 mx-5 p-5 rounded-lg")}>
            <TouchableOpacity>
                <View style={styles.fit}>
                    <Image source={props.icon} style={styles.icon}/>
                    <Text style={tailwind("pl-5 text-xl font-semibold")}>{props.title}</Text>
                </View>
                <Text style={tailwind("py-5")}>{props.description}</Text>
                <Text>{props.totalVolume}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MarketView

const styles = StyleSheet.create({
    icon: {
        width:34,
        height:34,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fit: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
});