import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const ImageDetail = ({ imageSource, title, rating, navObj, screenName}) => {
    return (
        <View style={{ padding: 10}}>
            <Image 
                style={{width: "100%", height: "40%"}}
                source={imageSource}
            />
            <Button 
                title="Lihat"
                onPress={() => navObj.navigate(screenName)}
            />

            <Image 
                style={{width: "100%", height: "40%"}}
                source={imageSource}
            />
            <Button 
                title="Lihat"
                onPress={() => navObj.navigate(screenName)}
            />
           
        </View>
        
    )
};

export default ImageDetail;