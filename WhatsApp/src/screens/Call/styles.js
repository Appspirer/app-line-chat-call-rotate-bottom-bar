import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        alignItems:'center'
    },
    avatar:{
        height:40,
        width:40
    },
    left:{
        flexDirection:'row',
        alignItems:'center'
    },
    info:{
        marginLeft:15
    },
    name:{
        fontSize:13,
        fontWeight:'bold',
        color: Colors.gray_purple,
        marginBottom:2
    },
    time:{
        fontSize:11,
        color:Colors.gray_text
    },
    right:{
        justifyContent:'center'
    },
    ic_call:{
        height:15,
        width:15,
        borderRadius:8,
        borderWidth:2,
        borderColor:Colors.white,
        justifyContent:"center",
        alignItems:'center',
        position:'absolute',
        right:-3
    }
})