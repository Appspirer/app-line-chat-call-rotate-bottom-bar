import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.green
    },
    avatar_cotainer: {
        marginTop: height * 0.1,
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    avatar: {
        height: 114,
        width: 114
    },
    info_container: {
        marginTop: 20,
        alignItems: 'center',
        paddingHorizontal: 32
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    name: {
        fontSize: 24,
        color: Colors.white
    },
    address: {
        marginLeft: 5,
        fontSize: 18,
        color: Colors.white,
        fontWeight: '200'
    },
    phone_number: {
        fontSize: 28,
        color: Colors.white,
        marginTop: 10
    },
    line: {
        height: 1,
        width: width - 32,
        alignSelf: 'center',
        backgroundColor: Colors.border,
        marginTop: 15,
        marginBottom: height * 0.1
    },
    action_container: {
        marginHorizontal: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item_column: {
        height: height * 0.2,
        justifyContent:"space-between"
    },
    action_item: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between',
    },
    action_text: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '300'
    },
    action_item_bottom: {
        alignItems: 'center',
        height:71,
        justifyContent:'center'
    },
    cancel_call:{
        height:71,
        width:71,
        backgroundColor: Colors.red2,
        borderRadius:36,
        justifyContent:'center',
        alignItems:'center'
    }
})