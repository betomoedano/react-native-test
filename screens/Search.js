import React from "react"
import tailwind from 'tailwind-rn';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    SafeAreaView, 
    Button, 
    Alert, 
    ScrollView} from 'react-native';
function Search() {
    return(
        <View>
            <Text style={tailwind("text-xl text-center font-medium pt-20")}>This is the Search View! 🤧</Text>
        </View>
    );
}

export default Search