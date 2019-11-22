import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const BunakenScreen = () => {

    return (
        <View>
            <Image 
                style={{width: "50%", height: "50%"}}
                source={require('../assets/beach.jpg')}
            />
        </View> 
    );
};

export default BunakenScreen;


