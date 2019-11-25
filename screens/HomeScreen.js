import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View>
            <ImageDetail 
                title="Test"
                imageSource={require('../assets/beach.jpg')}
                rating="5"
                navObj={navigation}
                screenName="Mobil"
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