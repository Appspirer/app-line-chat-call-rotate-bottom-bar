import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    story_bg: {
        width: (width - 16 * 4) / 3.5,
        height: (width - 16 * 4) / 3.5 * 110 / 75,
        alignItems: 'center',
    },
    avatar: {
        height: 34,
        width: 34,
        marginTop: '70%'
    },
    story_name: {
        fontSize: 10,
        color: Colors.white,
        marginTop: 5,
        textAlign: 'center'
    },
    call_avatar: {
        height: 60,
        width: 60
    },
    call_name: {
        textAlign: 'center',
        fontSize: 11,
        marginTop: 5,
        color: Colors.gray_purple
    },
    status: {
        position: "absolute",
        borderRadius: 10,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.white,
        right: -3,
        top: 3
    },
    line: {
        height: 1,
        backgroundColor: Colors.border,
    },
    message_container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    mess_left: {
        flexDirection: 'row'
    },
    info: {
        justifyContent: 'center',
        marginLeft: 10
    },
    mess_name: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.gray_purple
    },
    mess: {
        fontSize: 11,
        color: Colors.gray_text,
        marginTop: 2
    },
    mess_avatar: {
        height: 40,
        width: 40
    },
    time:{
        fontSize:11,
        color:Colors.gray_text
    }
})