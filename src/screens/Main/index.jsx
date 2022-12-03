import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView, View, VStack } from 'native-base';
import logoPex from '../../assets/logo-pex-2.png';
import topBanner from '../../assets/top-banner.png';
import frameFake from '../../assets/frame-fake.png';
import banner1 from '../../assets/banner-1.png';
import banner2 from '../../assets/banner-2.png';
import banner3 from '../../assets/banner-3.png';
// import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { ListButton } from '../../components/ListButton';
import { ProductCard } from '../../components/ProductCard';
import { Dimensions } from 'react-native';
import { categories, productCartds } from '../../data';

const windowWidth = Dimensions.get('window').width;
  
export function Main() {

  const navigation = useNavigation();

  return (
      <VStack flex={1}
        backgroundColor="#ffffff"
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={logoPex}
          />

        </View>
          <View style={styles.topMenu}>
            <TouchableOpacity style={styles.buttonIcon}
              onPress={() => navigation.navigate('SignUp')}>
              <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonIcon} 
              onPress={() => navigation.navigate('SignUp')}>
              <Feather name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <ScrollView>
          <Image
              style={styles.topBanner}
              source={topBanner}
            />


          
          <Text style={styles.title} >Categorias</Text>
          <View style={styles.container}>
            <View style={styles.scrollCategories}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                { categories.map((category, index) => (
                  <ListButton key={index} title={category}/>
                ))}
              </ScrollView>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Image
                // style={styles.image}  
                source={frameFake}
              />
            </ScrollView>
          </View>

          <Text style={styles.title} >Produtos populares</Text>
          <View style={styles.cardContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              { productCartds.map((productCard, index) => (
                <ProductCard 
                  key={index}
                  title={productCard.textCategory}
                  description={productCard.textDescription}
                  image={productCard.image}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.genericBanner}  
              source={banner1}
            />
            <Image
              style={styles.genericBanner}  
              source={banner2}
            />
            <Image
              style={styles.genericBanner}  
              source={banner3}
            />
          </View>
          </ScrollView>
        
      </VStack>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 33,
    // paddingRight: 33,
  },
  scrollCategories: {
    flexDirection: 'row',
    padding: 10,
    
  },
  cardContainer: {
    marginTop: 10,
    flexDirection: 'row',
    paddingLeft: 33,
    // paddingLeft: windowWidth * 0.33,
    
  },
  imageContainer: {
    position: 'absolute',
    top: 50,
    // paddingTop: 65,
    left: 32 ,
  },
  image: {
    alignSelf: 'center',
    width: 94,
    resizeMode: 'contain',
  },
  topBanner: {
    width: '100%',
    resizeMode: 'stretch',
  },
  bannerContainer: {
    marginTop: 47,
  },
  genericBanner: {
    marginTop: 2,
    width: '100%',
    
  },
  topMenu: {
    paddingTop: 65,
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonIcon: {
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 24,
    alignSelf: 'center',
    paddingLeft: 33,
  },
  describe: {
    fontSize: 14,
    color: '#B8B5C3',
    paddingTop: 8,
    paddingBottom: 16,
  },
  orageTextTop: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F09200',
    alignSelf: 'center',
    paddingTop: 24,
  },
  orageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F09200',
    paddingLeft: 5,
  },
  inputView:{
    paddingTop: 16,
  },
  input: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f8f8f9',
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 15,
    color: '#ffffff',
  },
  button: {
    width: '100%',
    alignSelf: 'center',
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F09200',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    paddingLeft: 32,
    paddingRight: 32,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
