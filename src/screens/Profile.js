import { View, Text, FlatList, SafeAreaView, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Profile() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <ImageBackground source={require('../../assets/image/a4.png')} resizeMode='center' style={{ flex: 1, marginTop: 0 }}>
                    <AppBar
                        elevation={0}
                        style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: 50, flex: 1 }}
                        leading={<TouchableOpacity style={[style.icon]}
                            onPress={() => navigation.navigate('Home')}>
                            <Image source={require('../../assets/image/angle-left.png')} resizeMode='stretch' style={{ height: 17, width: 17 }}></Image>
                        </TouchableOpacity>}
                    />
                    
                </ImageBackground>
            </KeyboardAvoidingView>
            <View style={{ flex: 1, backgroundColor: '#F0F0F0', marginTop: -40, }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, marginHorizontal: 20 }}>
                            <Text style={[style.title, { color: Colors.active, textAlign: 'center', }]}>domo</Text>

                            <View style={[style.txtinput, { backgroundColor: Colors.secondary, marginTop: 20 }]}>
                                <TextInput placeholder='domo@domo-main.com'
                                    placeholderTextColor={Colors.active}
                                    style={[style.m12, { color: Colors.active, flex: 1 }]}
                                />
                            </View>
                            <View style={[style.txtinput, { backgroundColor: Colors.secondary, marginTop: 10 }]}>
                                <TextInput placeholder='••••••••••'
                                    placeholderTextColor={Colors.active}
                                    style={[style.m12, { color: Colors.active, flex: 1 }]}
                                    secureTextEntry={!isPasswordVisible}
                                />
                                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color={Colors.active} />
                                </TouchableOpacity>
                            </View>
                            <View style={[style.txtinput, { backgroundColor: Colors.secondary, marginTop: 10 }]}>
                                <TextInput placeholder='15/02/2002'
                                    placeholderTextColor={Colors.active}
                                    style={[style.m12, { color: Colors.active, flex: 1 }]}
                                />
                                <Icon name='caret-down' size={20} color={Colors.active} />
                            </View>
                        </ScrollView>
                    </View>
        </SafeAreaView>
    )
}