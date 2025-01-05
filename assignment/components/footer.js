import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    const route = useRoute();

    const isLoginScreen = route.name === 'LoginScreen';
    return (
        <View style={styles.container}>
            {!isLoginScreen && (
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.footer_text_content}>UOV@2024</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4b0150',
        width: '90%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    footer_text_content: {
        color: '#fff',
        fontSize: 12,
        flex: 1,
        textAlign: 'center',
    }

});