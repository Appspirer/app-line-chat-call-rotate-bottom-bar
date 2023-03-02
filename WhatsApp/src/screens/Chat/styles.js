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
        marginBottom:10
    },
    avatar:{
        height:40,
        width:40
    },
    group:{
        height:15,
        width:15,
        position:'absolute',
        right:-3
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
    lastMess:{
        fontSize:11,
        color:Colors.gray_text
    },
    time:{
        fontSize:11,
        color: Colors.gray_text
    },
    newMess_container:{
        alignSelf:'flex-end',
        marginTop:2,
        height:16,
        width:16,
        borderRadius:8,
        backgroundColor: Colors.green,
        justifyContent:'center',
        alignItems:'center',
    },
    newMess:{
        fontSize:11,
        color: Colors.white
    },
    right:{
        justifyContent:'center'
    },
    lastMess_container:{
        flexDirection:'row',
        alignItems:'center'
    }
})