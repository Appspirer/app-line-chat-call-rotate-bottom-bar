import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        backgroundColor: Colors.green,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        padding:10
    },
    left:{
        flexDirection:"row",
        alignItems:'center'
    },
    logo:{
        height:37,
        width:37
    },
    text_title:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'bold',
        marginLeft:10
    },
    right_ic:{
        width:30,
        alignItems:'flex-end'
    }
})