import { View, Text, SafeAreaView, StatusBar, Dimensions, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { marginTop:-10,backgroundColor:Colors.primary}]}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ImageBackground source={require('../../assets/image/bg.png')} resizeMode='stretch' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/image/domo_img_1.png')} resizeMode='center' style={{ height: height / 7, width: width / 1, alignSelf: 'center' }} />
            </ImageBackground>
        </SafeAreaView>
    )
}