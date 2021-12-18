import React, { useState } from 'react'
import { TouchableOpacity,StyleSheet,Button, Text, View,TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons ,SimpleLineIcons} from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import firebase from 'firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
const db=firebase.firestore()



function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreens({ navigation }) {
  return (
    
    <SafeAreaView>
      <View style={{ }}>
       
      <Button
        title="Remainder"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    <View>
    <Card >
          <Text style={styles.Texts}>
            React Native Card View for Android and IOS using
            "react-native-elements"
          </Text>
        </Card>
    </View>

    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {

  const [email,setEmail]=useState("")
  const [Wage,setWage]=useState("")
  const [TypeOfWork,setTypeOfWork]=useState("")
  const [Address,setAddress]=useState("")




  const pushData=(async()=>{
      await db.collection('Posts/').add({
        "PostId":1,
        "email":email,
        "Address":Address,
        "TypeOfWork":TypeOfWork,
        "Wage":Wage,
        "Completed":false
      })
  })



  return (
    <View
    style={{
      flex:1, 
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Text style={{
        fontSize:25,
      }}>
         Request A Hand

      </Text>
      <View
      >
        
      <TextInput
      style={styles.inputbox}
      value={email}
      placeholder="email"
      onChangeText={setEmail}
      />
      
      <TextInput
      style={styles.inputbox}
      value={Address}
      placeholder="Address"
      onChangeText={setAddress}
      />
      <TextInput
      style={styles.inputbox}
      value={Wage}
      placeholder="Wage"
      onChangeText={setWage}
      />
      <TextInput
        style={styles.inputbox}
      value={TypeOfWork}
      placeholder="TypeOfWork"
      onChangeText={setTypeOfWork}
      />
      <TouchableOpacity
      style={
        styles.Buttons
      }
      
      onPress={pushData}
      >
        <Text style={styles.Texts}>
          Request
        </Text>
        </TouchableOpacity>
      </View>
      <Text
      style={{
        marginTop:10,
        color:"#01111a"
      }}
      >History Of Your Post</Text>

<TouchableOpacity
      style={
        styles.Buttons
      }
      
      onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.Texts}>
          History
        </Text>
        </TouchableOpacity>
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();

 function HomeScreen() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="REMAINDER" options={{
          tabBarIcon:()=>(
          <MaterialIcons name="dynamic-feed" size={24} color="black" />          ), 
        }} component={HomeScreens} />
        <Tab.Screen name="CONTACTS" options={{
          tabBarIcon:()=>(
            <MaterialIcons name="post-add" size={24} color="black" />
          )
        }} component={SettingsScreen} />
        <Tab.Screen name='HISTORY' 
        options={{
          tabBarIcon:()=>(
            <SimpleLineIcons name="options" size={24} color="black" />
          )
        }} component={HomeScreens}/>
      </Tab.Navigator>
    
  );
}
export {HomeScreen,SettingsScreen,HomeScreens,DetailsScreen}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginBottom:10,
    paddingVertical: 0,
    paddingHorizontal:50,
    borderWidth: 0,
    borderColor: "#20232a",
    borderRadius:25,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputbox:{
    marginTop:10,
    paddingHorizontal:50,
    borderRadius:20,
    borderWidth:1,
    borderColor:"#61dafb",
    textAlign:"center",
    backgroundColor:"#d1edd8"
    
  },
  Buttonalign:{
    marginTop:50,
    flexDirection:"row"
  },
  Buttons:{
    marginTop:20,
    alignItems: "center",
    backgroundColor: "#4999c4",
    padding: 10,
    borderRadius:15,
    
  },
  Texts:{
          
          marginLeft:5,
          marginRight:5,
          textAlign:"center",
          color:"#01111a",
  }
  
});