import React from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';

const ImageDetail = ({ imageSource, title, navObj, screenName}) => {
    return (
        <View style={{margin: 10, alignContent: "center", height: 200}}>
            <ImageBackground
                style={{width: "100%", height: "100%"}}
                source={imageSource}
            >
                <Text style={{marginVertical: 64, textAlign: "center", fontSize: 60, color: "#fff"}}>{title}</Text>
                <Button
                    title="Lihat"
                    onPress={() => navObj.navigate(screenName)}
                />
            </ImageBackground>
        </View>
        
    )
};

export default ImageDetail;