import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native';
import Logo from '../assets/logo.png'

const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <View className="flex-1">
    {/* first section */}
      <View className="mt-16 space-x-2 mx-4 flex-row flex justify-start items-center">
          <Image source={Logo} className="w-[75px] h-[70px]" resizeMode=''/>
        <Text className="self-end font-bold text-2xl mb-2">TravelWize</Text>
      </View>

      {/* second section */}
      <View className="border-2 mt-8">
        <Text className="text-3xl text-slate-600">Enjoy the trip with</Text>
        <Text className="text-[#0097b2] text-2xl font-bold">Good Moments</Text>
        <Text>Not all who wander are lost - they're just on an epic adventure.</Text>
      </View>

    </View>
  )
}

export default Home