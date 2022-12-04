import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { View, VStack, Actionsheet, Button, useDisclose, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { products } from '../../data';
import illustration from '../../assets/illustration.png';

import { Fontisto } from '@expo/vector-icons';

export function Product() {

  const navigation = useNavigation();

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  
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
          onPress={onOpen}
        >
          <Text style={styles.buttonText}>
            Comprar agora
          </Text>
        </TouchableOpacity>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content style={styles.actionSheet}>
          <Actionsheet.Item style={styles.actionSheet}>
            <Image
              style={styles.imageIllustration}
              source={illustration}
            />

            <Text style={styles.titleAction}>
              Adicionado ao carrinho
            </Text>          
            <Text style={styles.textAction}>
              Clique no botão de finalizar para solicitar sua cotação ou continue navegando pela PEX
            </Text>

            <TouchableOpacity
              style={styles.buttonWhite}
              onPress={onClose}
            >
              <Text style={styles.buttonTextWhite}>
                Continuar comprando
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>
                Finalizar Cotação
              </Text>
            </TouchableOpacity>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>

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
  imageIllustration: {
    alignSelf: 'center',
  },
  title: {
    paddingRight: 32,
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 8,
  },
  titleAction: {
    paddingRight: 32,
    alignSelf: 'center',
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
  textAction: {
    paddingRight: 32,
    alignSelf: 'center',
    textAlign: 'center',
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
  buttonWhite: {
    marginTop: 63,
    marginRight: 32,
    width: '95%',
    alignSelf: 'center',
    height: 56,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#F1F0F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#ffffff',
  },
  buttonTextWhite: {
    fontSize: 15,
    color: '#000000',
  },
  actionSheet: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 32,
  },

});
