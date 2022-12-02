import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { View, VStack } from 'native-base';
import upload_image from '../../assets/upload_image.png';

import { MaterialIcons } from '@expo/vector-icons';

export function SignIn() {

  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <VStack flex={1}
      backgroundColor="#ffffff"
    >

    <View style={styles.container}>

      <View style={styles.topMenu}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignUp')}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.topMenuText}>
          Dados Pessoais
        </Text>   
        <TouchableOpacity 
          onPress={() => navigation.navigate('SignUp')}>
          <MaterialIcons name="info" size={24} color="#000" />
        </TouchableOpacity>
      </View>


      <Image
        style={styles.image}
        source={upload_image}
      />

      <View style={styles.inputViewContainer} >
        <View style={styles.inputView} >
          <TextInput 
            style={styles.input}
            placeholder="Nome Completo"
            onChangeText={e => setName(e)}
            value={name}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput 
            style={styles.input}
            placeholder="Data de Nascimento"
            onChangeText={e => setBirth(e)}
            value={birth}
          />
        </View>

        <View style={styles.inputView} >
          <TextInput 
            style={styles.input}
            placeholder="Telefone"
            onChangeText={e => setPhone(e)}
            value={phone}
          />
        </View>
      </View>

    </View>


      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.navigate('EnableFaceId')}
        >
          <Text style={styles.buttonTextLeft}>
            Pular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRight}
          onPress={() => navigation.navigate('EnableFaceId')}
        >
          <Text style={styles.buttonTextRight}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>

    </VStack>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
  },
  topMenu: {
    paddingTop: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topMenuText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 64,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
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
  inputViewContainer: {
    paddingTop: 24,
  },
  inputView: {
    paddingTop: 16,
  },
  input: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f8f8f9',
    paddingLeft: 20,
  },
  buttonTextRight: {
    fontSize: 15,
    color: '#ffffff',
  },
  buttonTextLeft: {
    fontSize: 15,
    color: '#000000',
  },
  buttonLeft: {
    width: '50%',
    alignSelf: 'center',
    height: 56,
    borderRadius: 12,
    backgroundColor: '#Fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F1F0F3',
    marginRight: 4,
  },
  buttonRight: {
    width: '50%',
    alignSelf: 'center',
    height: 56,
    borderRadius: 12,
    backgroundColor: '#F09200',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
