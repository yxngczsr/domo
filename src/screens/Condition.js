import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Condition() {
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
                        <Text style={[style.title, { color: Colors.active, marginTop: 20, textAlign: 'center' }]}>Create automation</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>Automate run task with some conditions</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>4</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>Conditions</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('SC1')}
                            style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='cloud' size={20} color={Colors.primary} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>Weather changes</Text>
                                <Text style={[style.b12, { color: Colors.disable,marginTop:3 }]}>Run devices when temperature changes</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SC1')}
                            style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='location' size={20} color={Colors.orange} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>Location changes</Text>
                                <Text style={[style.b12, { color: Colors.disable,marginTop:3 }]}>Run devices when you leave or arrive</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SC1')}
                            style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='clock-time-three' size={20} color={Colors.purple} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>Schedule</Text>
                                <Text style={[style.b12, { color: Colors.disable,marginTop:3 }]}>Run devices in spesific time</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SC1')}
                            style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='gesture-tap' size={20} color='#00C5C5' />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b12, { color: Colors.active, }]}>Tap to run</Text>
                                <Text style={[style.b12, { color: Colors.disable,marginTop:3 }]}>Run devices only with one tap</Text>
                            </View>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}