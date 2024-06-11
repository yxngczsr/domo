import { View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Register() {

    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { marginTop: 45, backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}
                            style={[style.icon]}>
                            <Image source={require('../../assets/image/angle-left.png')} resizeMode='stretch' style={{ height: 17, width: 17 }}></Image>
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 40 }]}>Cria a tua conta </Text>

                        <View style={[style.inputContainer, { borderColor: isFocused === 'Full name' ? Colors.active : Colors.input, marginTop: 50, borderWidth: 1, paddingBottom: 3 }]}>
                            <TextInput placeholder='Nome Completo'
                                onFocus={() => setIsFocused('Full name')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                        </View>

                        <View style={[style.inputContainer, { borderColor: isFocused === 'Email' ? Colors.active : Colors.input, marginTop: 20, borderWidth: 1, paddingBottom: 3 }]}>
                            <TextInput placeholder='Email'
                                onFocus={() => setIsFocused('Email')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                        </View>

                        <View style={[style.txtinput, { borderColor: isFocused === 'Password' ? Colors.active : Colors.input, marginTop: 20, borderWidth: 1, paddingBottom: 3 }]}>
                            <TextInput placeholder='Password'
                                onFocus={() => setIsFocused('Password')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.txt, flex: 1, }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity onPress={() => navigation.navigate('Otp')}
                        style={{ flex: 1 ,marginTop:30}}>
                            <View style={[style.btn, { backgroundColor: Colors.active }]}>
                                <Text style={[style.btntxt]}>Register</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={[style.m14, { color: Colors.disable, textAlign: 'center', marginTop: 20 }]}>Or regista-te com</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/a1.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                            <Image source={require('../../assets/image/a2.png')} resizeMode='stretch' style={{ height: 60, width: 60, marginHorizontal: 12 }}></Image>
                            <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                        </View>

                        <View style={{marginBottom:20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                            <Text style={[style.m14, { color: Colors.active }]}>Já tens conta? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[style.m14, { color: Colors.primary }]}>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}