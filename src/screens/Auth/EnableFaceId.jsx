import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { View, VStack } from 'native-base';
import face_id from '../../assets/face_id.png';
import { MaterialIcons } from '@expo/vector-icons';

export function EnableFaceId() {

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
      </View>

      <Text style={styles.title}>
        Acesse com seu Face ID
      </Text>          
      <Text style={styles.describe}>
        Habilite o Face ID para acessar de forma mais fácil e ágil a sua conta da PEX com toda segurança
      </Text>
      <Image
        style={styles.image}
        source={face_id}
      />

    </View>


    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EnableFaceId')}
      >
        <Text style={styles.buttonText}>
          Habilitar Face ID
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
    alignSelf: 'flex-start',
  },
  image: {
    marginTop: 147,
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
