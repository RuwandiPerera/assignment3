import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, StatusBar, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import header from './Components/header'; 
import footer from './Components/footer'; 
import { View, Text } from 'react-native'; // Replace with:
import React from 'react';
import { View, Text } from 'react';


const Stack = createStackNavigator();

export default function App() {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          options={{
            headerShown: false,
          }}
        >
          {({ navigation }) => (
            <View style={styles.loginScreenContainer}>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <ScrollView
                  ref={scrollViewRef}
                  contentContainerStyle={{ flexGrow: 1 }}
                  keyboardShouldPersistTaps="handled"
                >
                  <Header />
                  <Login navigation={navigation} />
                </ScrollView>
                <Footer style={styles.footerContainer} />
              </KeyboardAvoidingView>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false, 
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    backgroundColor: '#fff',
    height: '100%',
  },
  footerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0, 
    left: 0,
    right: 0,
  },
});