import React from "react"
import tailwind from 'tailwind-rn';
import CryptoContainer from "../CryptoContainer";
import { StatusBar } from 'expo-status-bar';
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
function Home() {
    return(
        <ScrollView>
          <SafeAreaView>
          <View >
            <TouchableOpacity 
              style={tailwind("p-10")} 
              onPress={() => alert("this does not work lol! 🤫")}
            >
              <Text 
                style={tailwind("text-gray-500 text-left text-sm font-medium ")}
                >Portfolio balance</Text>
              <Text 
                style={tailwind("text-gray-600 font-semibold text-left text-2xl")}
                >$3,697,280.09</Text>
            </TouchableOpacity>
          </View>
          <Text 
              style={tailwind("text-gray-600 text-left font-semibold text-xl mb-2 pl-10 ")}
              >Watchlist</Text>
          <View style={tailwind("border-gray-200 mx-5 border-2 rounded-lg")}>
              <CryptoContainer src={require("../assets/BTC.png")} name="Bitcoin" price="37,950.23"/>
              <CryptoContainer src={require("../assets/ETH.png")} name="Ethereum" price="2,850.43"/>
              <CryptoContainer src={require("../assets/BNB.png")} name="Binance" price="653.23"/>
              <CryptoContainer src={require("../assets/Cardano.png")} name="Cardano" price="3.23"/>
              <CryptoContainer src={require("../assets/DOG.png")} name="Doge Coin" price="0.63"/>
              <CryptoContainer src={require("../assets/EOS.png")} name="Eos" price="30.24"/>
              <CryptoContainer src={require("../assets/ION.png")} name="Augur" price="49.78"/>
              <CryptoContainer src={require("../assets/MNX.png")} name="Minix Coin" price="10.44"/>
              <CryptoContainer src={require("../assets/NIM.png")} name="Niminal" price="22.57"/>
              <CryptoContainer src={require("../assets/favIcon.png")} name="Pac Coin" price="0.0098"/>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ScrollView>
    );
}

export default Home