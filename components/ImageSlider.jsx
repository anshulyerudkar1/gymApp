import {View, Text} from 'react-native';
import React from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { sliderImages } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ImageSlider() {

    const ItemCard = ({item, index}, parallaxProps) => {

        // Check if item is null or undefined
        if (!item) {
            return null;
        }

        // Calculate aspect ratio
        const aspectRatio = item.height && item.width ? item.height / item.width : 1.1;

        // Conditionally apply styles based on aspect ratio
        const imageStyle = aspectRatio > 1
            ? { width: '50%', height: '100%'}
            : { width: '10%', aspectRatio }; //aspectRatio, , resizeMode: 'contain', resizeMode: 'cover' 

        //console.log('Item:', item); // Add logging statement
        return (
            <View style={{ width: wp(100)-70, height:hp(25) }}>
                <ParallaxImage 
                source={item}
                //source={ item }
                containerStyle={{ borderRadius: 30, flex: 1 }}
                style={imageStyle} //contain { resizeMode: 'cover' }
                parallaxFactor={0.1}
                {...parallaxProps}
                />
            </View>
                
        )
    }
    //console.log('sliderImages:', sliderImages); // Add logging statement
    return (
        <Carousel
         data={sliderImages}
         loop={true}
         autoplay={true}
         renderItem={ItemCard}
         hasParallaxImages={true}
         sliderWidth={wp(100)}
         firstItem={1}
         autoplayInterval={4000}
         itemWidth={wp(100)-70}
         slideStyle={{ alignItems: 'center' }} //display: 'flex',
        />
        
    )
}

