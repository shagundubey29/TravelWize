import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Image } from 'react-native';
import {Logo, HeroImg } from '../assets'
import * as Animatable from "react-native-animatable";

const Home = ({ navigation }) => {

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <View className="relative flex-1 bg-slate-200">
    {/* first section */}
      <View className="mt-16 space-x-2 mx-4 flex-row flex justify-start items-center">
          <Image source={Logo} className="w-[75px] h-[70px]"/>
        <Text className="self-end font-bold text-2xl mb-2 ">TravelWize</Text>
      </View>

      {/* second section */}
      <View className=" relative mt-8 p-4 -z-10">
        <Text className="text-3xl text-slate-600">Enjoy the trip with</Text>
        <Text className="text-primary text-2xl font-bold mt-1">Good Moments</Text>
        <Text className="text-slate-500 text-[16px] mt-1">Not all who wander are lost - they're just on an epic adventure.</Text>
        
      </View>

      {/* circle-section */}
    
      <View className=" w-[360px] h-[360px] bg-primary rounded-full absolute -right-[150px] bottom-[100px] "></View>
      <View className=" w-[350px] h-[350px] bg-[#f38466] rounded-full absolute -left-[100px] -bottom-[150px] "></View>

      <View className="relative flex-1 justify-center items-center">
        <Animatable.Image 
        animation="fadeInUpBig"
        easing="ease-in-out"
        source={HeroImg} className="object-cover w-full h-full"/>
        <TouchableOpacity 
        onPress={() => navigation.navigate("Discover")}
        className="absolute w-24 h-24  rounded-full flex justify-center items-center border-slate-800 p-1 ml-6 border-t-[3px] border-l-[2px] border-r-[2px] border-b-0 top-[0px] left-[0px]">
          <Animatable.View 
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
          className="bg-slate-800 w-full h-full rounded-full flex justify-center items-center">
            <Text className="text-white text-[36px]">Go</Text>
          </Animatable.View>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home