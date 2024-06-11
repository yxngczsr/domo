import { View, Text, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, Switch, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {

    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { marginTop: 45, backgroundColor: Colors.bg }]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 50, width: 50 }}></Image>
                    
                        <TouchableOpacity onPress={() => setVisible1(true)}
                            style={[style.icon2]}>
                            <Image source={require('../../assets/image/plus-small.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                        </TouchableOpacity>
                    </View>

                    <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 30 }]}>Olá domo</Text>
                    <Text style={[style.m12, { color: Colors.disable, textAlign: 'center', marginTop: 5 }]}>Bem-vindo de volta. </Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 40 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity
                                onPress={() => {{setVisible1(false),navigation.navigate('Automation')}
                                }}
                                style={{ backgroundColor: Colors.blue_1, width: 175, borderRadius: 24, paddingVertical: 40, alignItems: 'center', marginRight:20 }}
                                >
                                <Image
                                    source={require('../../assets/image/thermometer-half.png')}
                                    resizeMode='stretch'
                                    style={{ height: 50, width: 50 }}
                                />
                                <Text style={[style.title, { color: Colors.secondary, marginTop: 15 }]}>27 </Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Temperatura</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                onPress={() => {{setVisible1(false),navigation.navigate('Report')}
                                }}
                                style={{ backgroundColor: Colors.yellow_1, width: 175, borderRadius: 24, paddingVertical: 40, alignItems: 'center' }}
                                >
                                <Image
                                    source={require('../../assets/image/light.png')}
                                    resizeMode='stretch'
                                    style={{ height: 50, width: 50 }}
                                />
                                <Text style={[style.title, { color: Colors.secondary, marginTop: 15 }]}>63 %</Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Energia</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </ScrollView>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 230 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity
                                onPress={() => {{setVisible1(false),navigation.navigate('MHome')}
                                }}
                                style={{ backgroundColor: Colors.red_1, width: 175, borderRadius: 24, paddingVertical: 40, alignItems: 'center', marginRight:20 }}
                                >
                                <Image
                                    source={require('../../assets/image/bulb.png')}
                                    resizeMode='stretch'
                                    style={{ height: 50, width: 50 }}
                                />
                                <Text style={[style.title, { color: Colors.secondary, marginTop: 15 }]}>40</Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Luminosidade</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                onPress={() => {{setVisible1(false),navigation.navigate('Profile')}
                                }}
                                style={{ backgroundColor: Colors.green_1, width: 175, borderRadius: 24, paddingVertical: 40, alignItems: 'center' }}
                                >
                                <Image
                                    source={require('../../assets/image/home.png')}
                                    resizeMode='stretch'
                                    style={{ height: 50, width: 50 }}
                                />
                                <Text style={[style.title, { color: Colors.secondary, marginTop: 15 }]}>0</Text>
                                <Text style={[style.b12, { color: Colors.secondary }]}>Trackings</Text>
                            </TouchableOpacity>
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