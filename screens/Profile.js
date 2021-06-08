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
function Profile() {
    return(
        <SafeAreaView>
            <View style={tailwind("")}>
                <Text style={tailwind("text-xl text-center font-medium pt-20")}>This is the Profile View! 🥶</Text>
            </View>
        </SafeAreaView>

    );
}

export default Profile