import { View, Text, FlatList, SafeAreaView, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function VAssis() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 30 }]}>
                    <AppBar color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity style={[style.icon]} onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name='chevron-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, marginTop: 20, textAlign: 'center' }]}>Voice assistant</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>Select voice services below to control your devices using your voice</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>4</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Services</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, height: height/5, backgroundColor: Colors.input, borderRadius: 24, paddingTop:30, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s8.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                                <Text style={[style.b12, { color: Colors.active,marginBottom:20 }]}>Google Assistant</Text>
                            </View>
                            <View style={{marginHorizontal:6}}></View>
                            <View style={{  flex: 1, height: height/5, backgroundColor: Colors.input, borderRadius: 24, paddingTop: 30, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s9.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                                <Text style={[style.b12, { color: Colors.active,marginBottom:20 }]}>Amazon Alexa</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View style={{ flex: 1, height: height/5, backgroundColor: Colors.input, borderRadius: 24, paddingTop:30, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s10.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                                <Text style={[style.b12, { color: Colors.active,marginBottom:20 }]}>Apple Siri</Text>
                            </View>
                            <View style={{marginHorizontal:6}}></View>
                            <View style={{  flex: 1, height: height/5, backgroundColor: Colors.input, borderRadius: 24, paddingTop: 30, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s11.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                                <Text style={[style.b12, { color: Colors.active,marginBottom:20 }]}>Samsung Bixby</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}