import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FilmeTrending from '../componente/filmeTrending';
import ListaFilme from '../componente/listaFilme';

export default function Acasa() {
    const[trending, setTrending] = useState([1,2,3]);
    const[upcoming, setUpcoming] = useState([1,2,3]);
    const[toprated, setTopRated] = useState([1,2,3]);
    return (
        <View className="flex-1">
            <SafeAreaView className={'mb-3 mt-3'}>
                <StatusBar style="dark" />
                <View className="flex-row justify-between intems-center mx-4">
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="red" />
                    <Text className="text-3xl font-bold">
                        Filme
                    </Text>
                    <TouchableOpacity>
                    <MagnifyingGlassIcon size="30" strokeWidth="2" color="red"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
                
            <ScrollView showsVerticalScrollIndicator={false} 
                contentContainerStyle={{paddingBottom: 10}}
                >
            <FilmeTrending data={trending}/>

            <ListaFilme title="In curand" data={upcoming}/>

            <ListaFilme title="Top Cotat" data={toprated}/>

            
            </ScrollView>
        </View>
    );
}