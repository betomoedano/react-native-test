import React from "react"
import tailwind from 'tailwind-rn';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    Button, 
    Alert } from 'react-native';

export default function CryptoContainer(props) {

    return(
        <View>
            <TouchableOpacity style={styles.fixToText}>
                <View style={{flexDirection: "row"}}>
                    <Image source={props.src} style={styles.logo}></Image>
                    <Text style={tailwind("text-lg px-5")}>{props.name}</Text>
                </View>
                <Text style={tailwind("text-lg")}>${props.price}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    fixToText: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    logo: {
        width:34,
        height:34,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });