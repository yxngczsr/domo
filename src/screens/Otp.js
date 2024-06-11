import { View, Text, FlatList, SafeAreaView, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 30 }]}>
                    <AppBar color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity style={[style.icon]} onPress={() => navigation.navigate('Register')}>
                            <Icon name='chevron-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: Colors.active, marginTop: 20, textAlign: 'center' }]}>Enter the verification code 🔒 </Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>A 5 digit verification code has been sent to your registered email address.</Text>
                        <OtpInputs
                            Clipboard={Clipboard}
                            numberOfInputs={4}
                            selectionColor={Colors.primary}
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30, }}
                            inputStyles={{
                                backgroundColor: Colors.input,
                                borderRadius: 10,
                                textAlign: 'center',
                                height: 60,
                                width: 60,
                                fontSize: 12,
                                color: Colors.active,
                            }}
                        />

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('RSuccess')}
                        style={[style.btn, { backgroundColor: Colors.active, marginTop: 20 }]}>
                        <Text style={[style.btntxt]}>Next</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, justifyContent: 'center' }}>
                        <Text style={[style.m12, { color: Colors.active }]}>Don’t have an account? </Text>
                        <TouchableOpacity >
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline', }]}>Send again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}