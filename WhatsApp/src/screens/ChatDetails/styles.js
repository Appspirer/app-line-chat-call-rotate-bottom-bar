import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    avatar: {
        height: 40,
        width: 40
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: '70%',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 3,
    },
    list: {
        marginHorizontal: 16,
        flex: 1
    },
    time_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        fontSize: 14,
        color: Colors.gray_text2,
    },
    checked: {
        height: 14,
        width: 14,
        marginLeft: 5
    },
    content: {
        fontSize: 14,
        color: Colors.text_chat,
        fontWeight: '600',
        width: '60%',
    },
    voice: {
        height: 30,
        width: 132,
        marginRight: 40
    },
    line: {
        height: 1,
        width: width - 32,
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: Colors.border
    },
    input_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 10
    },
    record: {
        height: 34,
        width: 34,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        borderRadius: 17,
        shadowOffset: {
            height: 0
        },
        shadowOpacity: 0.4,
        shadowRadius: 10
    },
    textinput: {
        width: width - 32 - 34 - 24 - 16,
        borderWidth: 1,
        borderColor: Colors.border_text,
        height: 40,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10
    },
    input: {
        width: (width - 32 - 34 - 24 - 16) * 0.7,
    }
})