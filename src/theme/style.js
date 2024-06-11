import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    main: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bg,
    },
    title: {
        fontSize: 28,
        color: Colors.secondary,
        fontFamily: 'Inter-SemiBold.ttf'
    },

    apptitle: {
        fontSize: 24,
        color: Colors.secondary,
        fontFamily: 'Inter-Bold'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Inter-Bold',
        color: Colors.secondary,
    },

    r10: {
        fontSize: 10,
        fontFamily: 'Inter-Regular',
        color: Colors.active,
    },
    m10: {
        fontSize: 10,
        fontFamily: 'Inter-Medium',
        color: Colors.active,
    },

    r12: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: Colors.active,
    },
    m12: {
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        color: Colors.active,
    },
    b12: {
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        color: Colors.active,
    },
    s12: {
        fontSize: 12,
        fontFamily: 'Inter-SemiBold',
        color: Colors.active,
    },

    r14: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: Colors.active,
    },
    m14: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: Colors.active,
    },
    b14: {
        fontSize: 14,
        fontFamily: 'Inter-Bold',
        color: Colors.active,
    },
    s14: {
        fontSize: 14,
        fontFamily: 'Inter-SemiBold',
        color: Colors.active,
    },


    r16: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: Colors.active,
    },
    m16: {
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        color: Colors.active,
    },
    b16: {
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        color: Colors.active,
    },
    s16: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: Colors.active,
    },

    r18: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        color: Colors.active,
    },
    m18: {
        fontSize: 18,
        fontFamily: 'Inter-Medium',
        color: Colors.active,
    },
    b18: {
        fontSize: 18,
        fontFamily: 'Inter-Bold',
        color: Colors.active,
    },
    s18: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
        color: Colors.active,
    },
    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        // marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },

    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 60,
        borderRadius: 24,
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 12,
        color: Colors.secondary,
        fontFamily: 'Inter-Medium',
    },
    btn2: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 60,
        borderRadius: 24,
        justifyContent: 'center',
        width: width / 2
    },
    btnoutline: {
        alignItems: 'center',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: Colors.secondary,
        borderWidth: 1,

    },
    txtinput: {
        paddingHorizontal: 10,
        height: 60,
        paddingBottom: 3,
        borderRadius: 24,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
    },
    inputContainer: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 24,
        height: 60,
        backgroundColor: '#F0F0F0',
    },
    icon: {
        height: 50,
        width: 50,
        borderRadius: 20,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon2: {
        height: 50,
        width: 50,
        borderRadius: 20,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    indicator: {
        borderColor: '#D9D9D9',
        height: 1.5,
        width: 20,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: Colors.bg,

    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Inter-Regular'
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },

    follow: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },
    following: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.bg1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },
    follow1: {
        height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary
    },
    following1: {
        height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', borderColor: '#97979720', borderWidth: 1, backgroundColor: '#F8F8F8'
    },
    bord2: {
        height: 24, width: 24, borderRadius: 12, borderColor: Colors.bord2, borderWidth: 1, justifyContent: 'center', alignItems: 'center'
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Inter-Regular'
    },
    categoryText: {
        fontSize: 14,
        color: Colors.primary,
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 20,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        fontFamily: 'Inter-Regular'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'space-between',
    },


}
);