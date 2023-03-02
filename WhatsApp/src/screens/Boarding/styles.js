import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        height: height,
        width: width,
        alignItems: "center",
        paddingHorizontal: 16
    },
    img: {
        marginTop: height * 0.2
    },
    title: {
        fontSize: 24,
        color: Colors.white
    },
    content: {
        fontSize: 18,
        color: Colors.white,
        textAlign: 'center',
        width: width - 128,
        marginTop:10,
        fontWeight:'300'
    },
    dot_container:{
        flexDirection:'row',
        position:'absolute',
        top: height*0.5,
        width: width,
        justifyContent:'center',
    },
    dot:{
        height:14,
        width:14,
        borderRadius:7,
        marginHorizontal:8
    }
})