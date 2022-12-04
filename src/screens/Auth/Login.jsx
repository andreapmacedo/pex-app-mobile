import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { View, VStack } from 'native-base';
import image_login from '../../assets/image_login.png';
import { Dimensions } from 'react-native';
import AuthContext from "../../context/AuthContext";

const windowWidth = Dimensions.get('window').width;

export function Login() {
  const navigation = useNavigation();
  const { setAuthenticated, user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {

    if (password.length < 3 || Number(password) !== 123) {
      alert('senha para acesso: 123');
      return;
    }
    if (Number(password) === user.password) {
      setAuthenticated(true);
    }
  }

  return (
      <VStack flex={1}
        backgroundColor="#ffffff"
      >
        <ScrollView>
          <Image
            style={styles.image}
            source={image_login}
          />

          <View style={styles.container}>
            <Text style={styles.title}>
              Bem vindo a PEX!
            </Text>          
            <Text style={styles.describe}>
              Informe os seus dados para ter acesso a um mundo de economia para sua obra
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
                secureTextEntry={true}
                placeholder="Senha"
                onChangeText={e => setPassword(e)}
                value={password}
              />
            </View>

            <TouchableOpacity 
              style={styles.orageTextTop} 
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.orageTextTop}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>
                  Acessar
                </Text>
              </TouchableOpacity>

              <View style={styles.footerTextContainer}>
                <Text style={styles.footerText}>
                  Não possui uma conta?
                </Text>

                <TouchableOpacity 
                  style={styles.orageText} 
                  onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.orageText}>
                    Criar conta
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
    paddingTop: 70,
    // position: 'absolute',
    // bottom: 40,
    paddingLeft: 32,
    paddingRight: 32,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
