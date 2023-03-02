import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function Header({ leftIcon, title, rightIcon, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {leftIcon ? leftIcon : <Image source={Images.logo} style={styles.logo} />}
                <Text style={styles.text_title}>{title ? title : "WhatsApp"}</Text>
            </View>
            <TouchableOpacity style={styles.right_ic} onPress={onPress ? onPress : null}>
                {rightIcon ? rightIcon : <Image source={Images.search} />}
            </TouchableOpacity>
        </View>
    )
}