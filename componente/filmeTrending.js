import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

var {width, height} = Dimensions.get('window');


export default function FilmeTrending({data}) {
    const navigation = useNavigation();

    const handleClick = item=>{
        navigation.navigate('Film', item);
    }
    return (
        <View>
            <Text className="mx-9 font-semibold text-2xl">Trending</Text>
            <Carousel data={data}
            renderItem={({item}) => <CadruFilm item={item} handleClick={handleClick}/>} 
            firstItem={1}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    )
}

const CadruFilm = ({item, handleClick}) => {
    return (
        <TouchableOpacity onPress={() => handleClick(item)}>
            <Image
                source={require('../assets/images/PosterFilm1.jpg')}
                style={{
                    width: width*0.6,
                    height: height*0.4,
                }}
                className="rounded-3xl"
                />
        </TouchableOpacity>
    )
}