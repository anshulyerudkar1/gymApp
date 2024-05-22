import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
    return (
        <View className="flex-1 flex justify-end">
            
            <Image className="h-full w-full absolute" source={require("../assets/images/wellcome1.png")}></Image>
            <LinearGradient
                colors={[ 'transparent', '#18181b']}
                style={{ width: wp(100), height:hp(70) }}
                start={{ x:0.5, y:0 }}
                end={{ x: 0.5, y:0.8 }}
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center" >
                    <Text className="text-white font-bold tracking-wide" style={{ fontSize: hp(5) }}>
                    {/* Start Sweating with <Text className="text-">Workouts</Text> */}
                    Start Sweating with
                    </Text>
                    <Text className="text-rose-500 font-bold tracking-wide" style={{ fontSize: hp(5) }}>
                    CrazyWorkouts<Text className="text-white">!</Text>
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity
                    onPress={()=> router.push('home')}
                     style={{ height: hp(7), width: wp(80) }}
                     className="bg-rose-500 flex items-center justify-center mx-auto rounded-full bordered-[2px] bordered-neutral-200"
                    >
                        <Text className="text-white font-bold tracking-widest" style={{ fontSize: hp(3) }}>
                            Get Started
                        </Text>
                            
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
            <StatusBar style='light'/>
        </View>
    )
}