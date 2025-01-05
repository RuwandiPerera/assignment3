import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();
  
  const isLoginScreen = route.name === 'LoginScreen';

  return (
    <View style={styles.container}>
      <View style={styles.header_text}>
        {!isLoginScreen && (
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        <Text style={[
          styles.header_text_content,
          !isLoginScreen && styles.header_text_with_button
        ]}>
          UoV Student Care
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/Logo/UoV_Logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header_text: {
    backgroundColor: '#4b0150',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_text_content: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  header_text_with_button: {
    marginLeft: -24, // Adjust this value to center the text when back button is present
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 20,
    zIndex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 350,
    height: 100,
    resizeMode: 'contain',
  },
});