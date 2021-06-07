import { StatusBar } from 'expo-status-bar';
import React from 'react';
import tailwind from 'tailwind-rn';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  SafeAreaView, 
  Button, 
  Alert } from 'react-native';

export default function App() {

  //const handlePress = () => console.log("text pressed!");
  return (
    <SafeAreaView style={tailwind("items-center")} >
      <Text style={tailwind("text-gray-600 text-xl font-medium mt-4")}>Dog's Tinder</Text>
      <TouchableOpacity onPress={() => alert("image touched! (●'◡'●)")}>
        <Image 
          style={{
            margin: 50,
            resizeMode:"cover",
            width: 300,
            height: 200,
          }}
          source={{uri: "https://picsum.photos/id/237/200/300"}}
        />
      </TouchableOpacity>
        <View style={styles.fixToText}>
          <Button
            title="No"
            onPress={() => Alert.alert("Left Button pressed")}
          />
          <Button
            title="Yes"
            onPress={() => Alert.alert("Rigth Button pressed")}
          />
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: 'space-between',
  }
});
