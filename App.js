import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView,TextInput, Text, View , Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("About")}
      />
      <TextInput/>
      
    </View>
    <View style={{flex:1,flexDirection:"row"}}>
        <Text style={{justifyContent:"flex-start"}}>Left <Text style={{justifyContent:"flex-end"}}>Right</Text></Text>
        
      </View>
      <View style={{flex:1,flexDirection:"row",}}>
        
      </View>
      <View >
            <View>
                
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Text style={{justifyContent: 'flex-start',paddingLeft:25}} >ol</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{justifyContent: 'flex-end',paddingLeft:25}} >5l</Text>
                    </View>
                </View>
            </View>

        </View>
    </ScrollView>
  );
}
function AboutScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to About again"
        onPress={() => navigation.push("About")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      
    </View>
    </ScrollView>
  );
}


const Stack = createNativeStackNavigator();

function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>Hi Subbu</Text>
    //   <Button title="Button"></Button>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <StackRouter/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
