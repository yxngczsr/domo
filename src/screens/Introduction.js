import { View, Text, FlatList, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import IntroItem from './IntroItem'
import Slides from './Slides'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Introduction() {
    const ref = React.useRef(null);
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const Footer = () => {
        return <View style={{ paddingHorizontal: 20, backgroundColor:Colors.bg}} >
            <View style={{
                flexDirection: 'row', justifyContent: 'center',marginTop:20
            }}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            height: 1.5,
                            width: 30,
                            backgroundColor: Colors.primary,
                            alignItems: 'center',

                        },]}
                    />
                ))}
            </View>
            <View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login1')}
                            style={[style.btn, { flex: 1, backgroundColor: Colors.active }]}>
                            <Text style={[style.btntxt]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'center' }}>
                        <Text style={[style.m12, { color: Colors.active }]}>Não tens conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={[style.m12, { color: Colors.primary, textDecorationLine: 'underline', }]}>Regista-te</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    }

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:Colors.bg }}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />

        </SafeAreaView>
    )
}