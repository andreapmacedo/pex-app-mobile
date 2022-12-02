import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { View, VStack } from 'native-base';
import image_signIn from '../../assets/image_signIn.png';
import { Dimensions } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const windowWidth = Dimensions.get('window').width;


export function SignUp() {

  const navigation = useNavigation();
  
  const [checkboxState, setCheckboxState] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <VStack flex={1}
    backgroundColor="#ffffff"
  >
    <Image
      style={styles.image}
      source={image_signIn}
    />

    <View style={styles.container}>
      <Text style={styles.title}>
        Crie sua conta na pex
      </Text>          
      <Text style={styles.describe}>
        Informe o seus dados para criar sua conta na PEX e economizar muito na sua obra
      </Text>

      <View style={styles.inputView} >
        <TextInput 
          style={styles.input}
          placeholder="Email"
          onChangeText={e => setEmail(e)}
          value={email}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput 
          style={styles.input}
          placeholder="Senha"
          onChangeText={e => setPassword(e)}
          value={password}
        />
      </View>
    
      <View style={styles.checkboxContainer}>
        
        <BouncyCheckbox
          style={{ marginTop: 16 }}
        
          isChecked={checkboxState}
          text="Li e aceito os Termos de serviço e política de privacidade"
          disableBuiltInState
          onPress={() => setCheckboxState(!checkboxState)}
        />
      </View>


    </View>
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('EnableFaceId')}
        // onPress={() => navigation.navigate('SignIn')}
        onPress={() => navigation.navigate('TermsAndConditions')}
      >
        <Text style={styles.buttonText}>
          Continuar
        </Text>
      </TouchableOpacity>

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>
          Não possui uma conta?
        </Text>
        <Text style={styles.orageText}>
          Acessar
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
  image: {
    alignSelf: 'center',
    width: windowWidth,
    resizeMode: 'stretch',
    // paddingBottom: 10,
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
  inputView: {
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
