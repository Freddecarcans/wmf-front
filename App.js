import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Button, Icon, Card } from "react-native-elements";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import { useNetInfo } from '@react-native-community/netinfo';
import broc from './images/broc2.jpg';

export default function App() {
  const netInfo = useNetInfo();

  return (
    <View style={styles.container}>
      <Image source={broc} style={styles.pict} resizeMode="cover" />
      <Text style={styles.title}>
        WMF (Where're My Fishes) {"\n"}
        La première application qui {"\n"}
        enregistre vos captures {"\n"}
        et qui les localise !!!
      </Text>

      <Image style={styles.prise} source={require("./images/nous.jpg")} />
      {netInfo.isConnected === false &&
        <ActivityIndicator size="large" color="#0000ff" />}
      {netInfo.isConnected === true &&

        <View style={styles.container2} >
          <TouchableOpacity>
            <Button
              buttonStyle={styles.signup}
              /*onPress={goToEmailScreen}*/
              title="S' inscrire"
              titleStyle={styles.signupText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            /*onPress={goToConnection}*/
            style={styles.signin}
          >
            <Text style={styles.signinText}>Déjà enregistré, SE CONNECTER</Text>
          </TouchableOpacity>
        </View>}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
  },
  pict: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    marginTop: 80
  },
  container2: {
    flex: 1,
    justifyContent: "flex-end"
  },
  signin: {
    marginLeft: scale(16),
    marginRight: scale(16),
    paddingVertical: scale(8),
    alignItems: "center",
    /*justifyContent: "center",*/
    marginBottom: scale(12),
    textAlign: "center",
    fontSize: 15,
    borderRadius: 50,
    borderColor: "#rgba(255, 255, 255, 0.5)",
    borderWidth: 2,
    paddingHorizontal: scale(10),
  },
  signup: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginLeft: scale(16),
    marginRight: scale(16),
    paddingVertical: scale(8),

    /*alignItems: "center",*/
    /*justifyContent: "center",*/
    marginBottom: scale(12),
    borderRadius: 50
  },
  signinText: {
    fontSize: 15,
    color: "#fff"
  },
  signupText: {
    color: "#000",
    fontSize: 20,
  },

  prise: {
    width: 200,
    height: 200,
  }
});
