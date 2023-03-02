import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ImageBackground, Image } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Images from "../../themes/Images";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')

const data = [...new Array(4).keys()]

export default function Boarding({ navigation }) {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        ctrNavigate()
    }, [])

    const ctrNavigate = () => {
        setTimeout(() => {
            navigation.navigate("HomeScreen")
        }, 5500)
    }


    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width}
                height={height}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={500}
                onSnapToItem={(index) => setSelected(index)}
                renderItem={({ index }) => (
                    <ImageBackground source={Images.bg_boarding} style={styles.bg}>
                        <Image source={Images.call_boarding} style={styles.img} />
                        <Text style={styles.title}>Welcome to WhatsApp</Text>
                        <Text style={styles.content}>Cross-platform mobile messaging with friends all over the world</Text>
                    </ImageBackground>
                )}
            />
            <View style={styles.dot_container}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={[styles.dot, { backgroundColor: selected === index ? Colors.green : Colors.white }]} />
                    )
                })}
            </View>
        </View>
    )
}