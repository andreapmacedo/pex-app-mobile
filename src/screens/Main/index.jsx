import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { View, VStack } from 'native-base';
import logoPex from '../../assets/logo-pex-2.png';
import topBanner from '../../assets/top-banner.png';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
  
export function Main() {

  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



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

          <Image
              style={styles.topBanner}
              source={topBanner}
            />

          <View style={styles.container}>

          
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.buttonText}>
                Acessar
              </Text>
            </TouchableOpacity>

            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>
                Não possui uma conta?
              </Text>
              <Text style={styles.orageText}>
                Criar conta
              </Text>
            </View>
          </View>
        
      </VStack>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 33,
    paddingRight: 33,
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
    marginTop: 30,
    width: '100%',
    resizeMode: 'stretch',
  },
  topMenu: {
    paddingTop: 65,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonIcon: {
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 24,
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
