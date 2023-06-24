import { View,Text, TouchableOpacity,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowUturnLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

var {width, height} = Dimensions.get('window');

export default function EcranFilm(){
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    let movieName = "The Social Network";
    return (
        <ScrollView 
        contentContainerStyle={{paddingBottom: 20}} 
        className="flex-1"
        >
        <View className="w-full">
        <SafeAreaView className={'mb-3 mt-6'}>
            <View className="mx-4 flex-row justify-between items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowUturnLeftIcon size="30" strokeWidth={2} color="red" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="30" color={isFavourite? "red" : "black"} />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
        <View>
            <Image
            source={require('../assets/images/PosterFilm1.jpg')}
            style={{
                width,
                height: height*0.55,
            }}
            />
            <LinearGradient 
                        colors={['transparent', 'rgba(23, 23, 23, 0.3)', 'rgba(23, 23, 23, 1)']} 
                        style={{width, height: height*0.40}}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                        
                    />
        </View>
            <View style={{marginTop: -(height*0.09)}} >
                <Text className="text-white text-center text-3xl font-bold">
                    {
                        movieName
                    }
                </Text>
                <Text className="text-center text-base font-semibold mt-10">
                    Lansat • 2010  • PG-13  • 2h
                </Text>
                <Text className="text-center text-base font-semibold">
                    Biografic  • Drama
                </Text>
                <Text className="text-center text-base font-semibold mt-3">
                As Harvard student Mark Zuckerberg creates the social networking
                 site that would become known as Facebook, he is sued by 
                 the twins who claimed he stole their idea and by the co-founder
                  who was later squeezed out of the business.
                </Text>
            </View>
        </View>
        </ScrollView>
    )
}
