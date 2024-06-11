import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { AppBar, HStack } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Lumos() {
    
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 45 }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Home')}
                            style={[style.icon]}>
                            <Image source={require('../../assets/image/angle-left.png')} resizeMode='stretch' style={{ height: 17, width: 17 }}></Image>
                        </TouchableOpacity>}
                    />
                    
                    
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, marginTop: 400 }}>
                        <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: Colors.input, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Image source={require('../../assets/image/humidity.png')} resizeMode='stretch' style={{ height: 25, width: 25 }}></Image>
                                <Text style={[style.b12, { color: Colors.active, marginTop: 15 }]}>Humidade</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.title, { color: Colors.active }]}>37</Text>
                                <Text style={[style.m12, { color: Colors.disable }]}>%</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}