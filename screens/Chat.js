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
import MarketView from "../Components/MarketView";

function Chat() {
    return(
        <ScrollView>
        <SafeAreaView>
            <View style={tailwind("")}>
                <Text style={tailwind("text-2xl text-left font-semibold p-10")}>Markets</Text>

                    <MarketView 
                        icon={require("../assets/Icons/icon.png")}
                        title="Chess"
                        description="Will Magnus Carlsen Retain His World Chess Championship Crown in 2021?"
                        totalValue="$13,595.25"
                    />
                    <MarketView 
                        icon={require("../assets/Cardano.png")}
                        title="Soccer"
                        description="Will Magnus Carlsen Retain His World Chess Championship Crown in 2021?"
                        totalValue="$13,595.25"
                    />
                    <MarketView 
                        icon={require("../assets/favIcon.png")}
                        title="UFC"
                        description="Will Magnus Carlsen Retain His World Chess Championship Crown in 2021?"
                        totalValue="$13,595.25"
                    />
                    <MarketView 
                        icon={require("../assets/BNB.png")}
                        title="WWE"
                        description="Will Magnus Carlsen Retain His World Chess Championship Crown in 2021?"
                        totalValue="$13,595.25"
                    />
                    <MarketView 
                        icon={require("../assets/MNX.png")}
                        title="NFL"
                        description="Will Magnus Carlsen Retain His World Chess Championship Crown in 2021?"
                        totalValue="$13,595.25"
                    />
                    <MarketView 
                        icon={require("../assets/Icons/add_circle.png")}
                        title="NBA"
                        description="Will Magnus Carlsen Retain His World Chess Championship Crown in 2021?"
                        totalValue="$13,595.25"
                    />
                

            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

export default Chat