import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { View, VStack, Actionsheet, Button, useDisclose, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { products } from '../../data';

import { Fontisto } from '@expo/vector-icons';

export function Product() {

  const navigation = useNavigation();
  
  return (
    <VStack flex={1}
      backgroundColor="#ffffff"
    >
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}>
            <Fontisto name="favorite" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          { products[0].images.map((img, index) => (
            <Image
              key={index}
              style={styles.image}
              source={img}
            />
          ))}
        </ScrollView>
        <Text style={styles.text}>
          { products[0].category }
        </Text>
        <Text style={styles.title}>
          { products[0].title }
        </Text>          
        <Text style={styles.info}>
            Informações
        </Text>
        <Text style={styles.textInfo}>
          { products[0].info }
        </Text>          

        <TouchableOpacity
          style={styles.button}
          // onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            Comprar agora
          </Text>
        </TouchableOpacity>
      </View>
    </VStack>
  );

}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 32,
    // paddingRight: 32,
  },
  topMenu: {
    paddingTop: 64,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topMenuText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 32,
    marginRight: 16,
    alignSelf: 'center',
    maxWidth: 311,
    maxHeight: 334,
    resizeMode: 'contain',
  },
  title: {
    paddingRight: 32,
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 8,
  },
  text: {
    paddingRight: 32,
    fontSize: 12,
    color: '#999999',
    marginTop: 24,
  },
  textInfo: {
    paddingRight: 32,
    fontSize: 14,
    color: '#999999',
    marginTop: 9,
  },
  info: {
    paddingRight: 32,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 24,
  },
  button: {
    marginTop: 63,
    marginRight: 32,
    width: '95%',
    alignSelf: 'center',
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F09200',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#ffffff',
  },
});
