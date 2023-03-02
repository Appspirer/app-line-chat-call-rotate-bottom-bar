import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        color: Colors.white
    },
    title: {
        fontSize: 11,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 15,
        marginBottom: 20
    },
    story_list: {
        paddingLeft: 16
    },
    line: {
        backgroundColor: Colors.border,
    }
})