import { View, Text, FlatList, SafeAreaView, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Setting() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 30 }]}>
                    <AppBar color={Colors.bg}
                        elevation={0}
                        trailing={<HStack>
                            <View style={[style.icon2]} >
                                <Image source={require('../../assets/image/s2.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                            </View>
                            <View style={[style.icon2, { marginLeft: 10 }]} >
                                <Image source={require('../../assets/image/s3.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                            </View>
                        </HStack>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Profile')} activeOpacity={10}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s4.png')} size={80} style={{ backgroundColor: Colors.secondary }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.subtitle, { color: Colors.active }]}>George Martin</Text>
                                <Text style={[style.m12, { color: Colors.disable }]}>george123@email.com</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.b16, { color: Colors.active, flex: 1 }]}>Quick action</Text>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline' }]}>Manage</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, height: 110, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s5.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                <Text style={[style.b12, { color: Colors.active }]}>Lock home</Text>
                            </View>
                            <View style={{ marginHorizontal: 10, flex: 1, height: 110, backgroundColor: Colors.input, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s6.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                <Text style={[style.b12, { color: Colors.active }]}>Disable all</Text>
                            </View>
                            <View style={{ flex: 1, height: 110, backgroundColor: Colors.primary, borderRadius: 24, paddingVertical: 18, justifyContent: 'space-between', alignItems: 'center' }}>
                                <Image source={require('../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                <Text style={[style.b12, { color: Colors.secondary }]}>Off energy</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ height: 31, width: 31, backgroundColor: Colors.active, borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[style.m12, { color: Colors.secondary, marginTop: -2 }]}>3</Text>
                            </View>
                            <Text style={[style.b16, { color: Colors.active, marginLeft: 10 }]}>General</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('VAssis')}
                            style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='mic' size={20} color={Colors.primary} />
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Voice assistant</Text>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('VAssis')}
                            style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='notifications' size={20} color='#EA8917' />
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Notification</Text>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('VAssis')}
                            style={{ paddingHorizontal: 10, paddingVertical: 28, backgroundColor: Colors.input, borderRadius: 24, marginTop: 15, flexDirection: 'row', alignItems: 'center' ,marginBottom:80}}>
                            <Icon name='help' size={20} color='#00C5C5' />
                            <Text style={[style.b12, { color: Colors.active, marginLeft: 10, flex: 1 }]}>FAQ & feedback</Text>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}