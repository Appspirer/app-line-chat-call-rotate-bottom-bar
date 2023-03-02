import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Call, Chat } from '../screens';
import Icons from '../themes/Icons';
import { View, Dimensions, Animated, Easing, TouchableOpacity } from 'react-native'
import Colors from '../themes/Colors';
import { useEffect, useState } from 'react';

var { height, width } = Dimensions.get('window')

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    const rotation = new Animated.Value(0);
    const [rotate, setRotate] = useState(0)
    const [oldRotate, setOldRotate] = useState(0)
    const [screenIndex, setScreenIndex] = useState(0)

    useEffect(() => {
        Animated.timing(rotation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear
        }).start()
    }, [rotate])


    const MyTabBar = ({ navigation }) => {

        const ctrNavigate = (index) => {
            let temp = index % 3
            switch (temp) {
                case 0: navigation.navigate('Home')
                    break;
                case 1: navigation.navigate('Call')
                    break;
                case 2: navigation.navigate('Chat')
                    break;
                case -1: navigation.navigate('Chat')
                    break;
                case -2: navigation.navigate('Call')
                    break;
                default:
                    break;
            }
        }

        const ctrLeftRotate = () => {
            ctrNavigate(screenIndex - 1)
            setRotate(rotate + 60)
            setOldRotate(rotate)
            setScreenIndex(screenIndex - 1)
        }

        const ctrRightRotate = () => {
            ctrNavigate(screenIndex + 1)
            setRotate(rotate - 60)
            setOldRotate(rotate)
            setScreenIndex(screenIndex + 1)
        }

        return (
            <View style={{
                width: width,
                height: width,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: -width / 1.5,
                transform:[{scaleX:1.1},{scaleY:0.95}]
            }}>
                <Animated.View style={{
                    width: width,
                    height: width,
                    borderRadius: width / 2,
                    backgroundColor: Colors.transparent,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: [{
                        rotate: rotation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [`${oldRotate}deg`, `${rotate}deg`]
                        })
                    }]
                }}>
                    <View style={{ height: width * 0.9, justifyContent: 'space-between', position: 'absolute' }}>
                        <Animated.View style={{
                            transform: [{
                                rotateZ: screenIndex % 3 === -1 || screenIndex % 3 === 2 ? '-60deg' :
                                    screenIndex % 3 === 1 || screenIndex % 3 === -2 ? '60deg'
                                        : '0deg'
                            }]
                        }}>
                            {Icons.Icons({ name: "home_ic", height: 15, width: 15 })}
                        </Animated.View>
                        <Animated.View style={{
                            transform: [{
                                rotateZ: screenIndex % 3 === -1 || screenIndex % 3 === 2 ? '-240deg' :
                                    screenIndex % 3 === 1 || screenIndex % 3 === -2 ? '240deg'
                                        : '180deg'
                            }]
                        }}>
                            {Icons.Icons({ name: "home_ic", height: 15, width: 15 })}
                        </Animated.View>
                    </View>
                    <View style={{ height: width * 0.9, justifyContent: 'space-between', position: 'absolute', transform: [{ rotateZ: '-120deg' }] }}>
                        <Animated.View style={{
                            transform: [{
                                rotateZ: screenIndex % 3 === -1 || screenIndex % 3 === 2 ? '60deg' :
                                    screenIndex % 3 === 1 || screenIndex % 3 === -2 ? '0deg'
                                        : '300deg'
                            }]
                        }}>
                            {Icons.Icons({ name: "call_ic", height: 15, width: 15 })}
                        </Animated.View>
                        <Animated.View style={{
                            transform: [{
                                rotateZ: screenIndex % 3 === -1 || screenIndex % 3 === 2 ? '-120deg' :
                                    screenIndex % 3 === 1 || screenIndex % 3 === -2 ? '180deg'
                                        : '120deg'
                            }]
                        }}>
                            {Icons.Icons({ name: "call_ic", height: 15, width: 15 })}
                        </Animated.View>
                    </View>
                    <View style={{ height: width * 0.9, justifyContent: 'space-between', position: 'absolute', transform: [{ rotateZ: '-240deg' }] }}>
                        <Animated.View style={{
                            transform: [{
                                rotateZ: screenIndex % 3 === -1 || screenIndex % 3 === 2 ? '0deg' :
                                    screenIndex % 3 === 1 || screenIndex % 3 === -2 ? '-60deg'
                                        : '60deg'
                            }]
                        }}>
                            {Icons.Icons({ name: "chat_ic", height: 15, width: 15 })}
                        </Animated.View>
                        <Animated.View style={{
                            transform: [{
                                rotateZ: screenIndex % 3 === -1 || screenIndex % 3 === 2 ? '180deg' :
                                    screenIndex % 3 === 1 || screenIndex % 3 === -2 ? '120deg'
                                        : '-120deg'
                            }]
                        }}>
                            {Icons.Icons({ name: "chat_ic", height: 15, width: 15 })}
                        </Animated.View>
                    </View>
                </Animated.View>
                <View style={{ marginBottom: 28 + width * 0.35, flexDirection: 'row', justifyContent: "space-between", width: width * 0.85 }}>
                    <TouchableOpacity
                        style={{ height: 30, width: 60, marginTop: -10 }}
                        onPress={() => ctrLeftRotate()}
                    />
                    {Icons.Icons({ name: "ic_direction", height: 28, width: 93 })}
                    <TouchableOpacity
                        style={{ height: 30, width: 60, marginTop: -10 }}
                        onPress={() => ctrRightRotate()}
                    />
                </View>
            </View>
        )
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
            initialRouteName="Home"
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: () => (
                        <View>
                            {Icons.Icons({ name: 'chat_ic', height: 14, width: 14 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Call" component={Call} />
        </Tab.Navigator>
    );
}