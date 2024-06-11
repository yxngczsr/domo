import {
    View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import style from '../theme/style';
import { Colors } from '../theme/color';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({ item }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: width, backgroundColor:Colors.bg}}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <Image source={require('../../assets/image/5.png')} style={{ width: 40, height: 40, resizeMode: 'stretch', marginHorizontal: 20, marginTop: 40 }} />
            <View style={{ flex: 2, marginTop: 20 }}>
                <Image source={item.bg} style={{ alignSelf: 'center', width: width - 40, height: height / 2.5, resizeMode: 'stretch', }} />
            </View>
            <View style={{ marginHorizontal: 20, }}>
                <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginHorizontal: 20, marginTop: 20 }]}>{item.title}</Text>
            </View>

        </SafeAreaView>
    )
}