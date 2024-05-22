import {View, Text, Image} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BodyParts from '../components/BodyParts';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
            <StatusBar style="dark"/>

            {/* punchline and avatar */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className="font-bold tracking-wider text-neutral-700"
                    >
                        READY TO
                    </Text>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className="font-bold tracking-wider text-rose-500"
                    >
                        WORKOUT
                    </Text>
                </View>
                <View className="flex justify-center items-center space-y-2">
                    <Image 
                        source={require("../assets/images/avatar.png")} 
                        style={{ width: hp(6), height: hp(6) }} 
                        className="rounded-full"
                    />
                    <View 
                        className="flex justify-center items-center bg-neutral-200 rounded-full border-[3px] border-neutral-300" 
                        style={{ width: hp(5.5), height: hp(5.5) }}
                    >
                        <Ionicons name="notifications" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>

            {/* image slider */}
            <View>
                <ImageSlider/>
            </View>

            {/* body parts list */}
            <View style={{ flex:1 }}>
                <BodyParts/>
            </View>
        </SafeAreaView>
    )
}