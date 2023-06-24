import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Image, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

var {width, height} = Dimensions.get('window');

export default function ListaFilme({title, data}) {
    let movieName = "The Social Network";
    const navigation = useNavigation();
    return (
        <View>
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text className="text-lg" style={styles.linkText}>Vezi tot</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                horizontal
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{paddingBottom: 15}}
                >
                {
                    data.map((item, index) =>{
                        return (
                            <TouchableOpacity
                            key = {index}
                            onPress={() => navigation.navigate('Film', item)}
                            >
                                <View className="space-y-1 mr-4">
                                <Image
                                    source={require('../assets/images/PosterFilm1.jpg')}
                                    style={{
                                        width: width*0.33,
                                        height: height*0.22,
                                    }}
                                    className="rounded-3xl"
                                />
                                </View>
                                <Text>
                                    {
                                        movieName.length>14? movieName.slice(0,14)+ '...': movieName
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    linkText:{
        color: '#3489eb',
    },
});