import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { AppBar, HStack } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Report() {
    
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
                
                
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 20 }]}>Energia</Text>
                        <Text style={[style.m12, { color: Colors.disable, textAlign: 'center' }]}>consumo energia</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, padding: 15, borderRadius: 24, backgroundColor: '#EA8917', flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                <Image source={require('../../assets/image/s15.png')} resizeMode='stretch' style={{ height: 20, width: 20 }} />
                                    <Text style={[style.b12, { color: Colors.secondary, marginTop: 15 }]}>Hoje</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={[style.title, { color: Colors.secondary }]}>40</Text>
                                    <Text style={[style.m12, { color: Colors.secondary }]}>kwh</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>

            <Modal transparent={true} visible={visible1}>
                <View style={{
                    // flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true',
                    height: height
                }}>
                    <TouchableOpacity onPress={() => setVisible1(false)}
                        style={[style.icon2,{alignSelf:'flex-end',marginTop:20,marginRight:20}]}>
                        <Image source={require('../../assets/image/scan-plus.png')} resizeMode='stretch' style={{ height: 30, width: 35 }}></Image>
                    </TouchableOpacity>

                    <View style={[style.modalcontainer, { backgroundColor: 'transparent', width: width / 1.4, borderRadius: 40, marginTop: 20, alignSelf:'flex-end',marginRight:0}]}>
                        <View style={{ marginHorizontal: 10, backgroundColor: Colors.secondary, padding: 15, borderRadius: 40 }}>

                            <TouchableOpacity onPress={() => {setVisible1(false),navigation.navigate('ActiveD')}}
                            style={{ height: 60, borderRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Add Domo</Text>
                                <Image source={require('../../assets/image/tent-plus.png')} resizeMode='stretch' style={{ height: 25, width: 25 }}></Image>
                            </TouchableOpacity>

                            <View style={[style.divider, { backgroundColor: Colors.input, height: 1.5, marginTop: 10 }]}></View>

                            <TouchableOpacity onPress={() =>{setVisible1(false),navigation.navigate('AddDevice')}}
                            style={{ height: 60, borderRadius: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                                <Text style={[style.m12, { color: Colors.active }]}>Scan Domo</Text>
                                <Image source={require('../../assets/image/scan-plus.png')} resizeMode='stretch' style={{ height: 30, width: 35 }}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}