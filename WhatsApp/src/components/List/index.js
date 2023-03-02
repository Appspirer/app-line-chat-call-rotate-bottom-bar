import React from "react";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native'
import Header from "../../components/Header";
import Images from "../../themes/Images";
import styles from "./styles";

export default function List({ data = [], renderItem, title = "", style, vertical = false, styleList }) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView
                horizontal={vertical ? false : true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={[styles.story_list, styleList]}
            >
                {data.map((item, index) => {
                    return (
                        <View key={index} style={{ marginRight: !vertical && (index === data.length - 1 ? 32 : 16) }}>
                            {renderItem ? renderItem(item) : <></>}
                            {vertical && <View style={[styles.line, {
                                marginBottom: 8,
                                height: index === data.length - 1 ? 0 : 1
                            }]} />}
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}