import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View>
            <ImageDetail 
                title="Motor"
                imageSource={require('../assets/motor.jpg')}
                navObj={navigation}
                screenName="Mobil"
            />
            <ImageDetail 
                title="Mobil"
                imageSource={require('../assets/mobil.jpg')}
                navObj={navigation}
                screenName="Motor"
            />
            {/* <Button 
                title="Go to Component Screen"
                onPress={()=> navigation.navigate('Component')}
            />
            <Button 
                title="Go to Student Screen"
                onPress={()=> navigation.navigate('Student')}
            />
            <Button 
                title="Go to Image Screen"
                onPress={()=> navigation.navigate('Image')}
            />
            <Button 
                title="Go to Counter Screen"
                onPress={()=> navigation.navigate('Counter')}
            /> */}

            

        </View>
        
    );
};

export default HomeScreen;