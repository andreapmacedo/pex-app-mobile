import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { View, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export function TermsAndConditions() {

  const navigation = useNavigation();
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
          <TouchableOpacity 
            onPress={() => navigation.navigate('SignUp')}>
            <Feather name="upload" size={24} color="black" />
          </TouchableOpacity>
        </View>

        
        <Text style={styles.describe}>
        Ultima atualização em Outrubro/2022
        </Text>
        <Text style={styles.title}>
          Temos de uso
        </Text>          

        <ScrollView style={styles.scrollView}>
          <Text style={styles.textItem}>1. Termos</Text>          
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.textItem}>2. Licença de uso</Text>          
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.textItem}>3. Outros</Text>          
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
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

  title: {
    fontSize: 24,
    fontWeight: 'bold', 
    paddingBottom: 32,
  },
  describe: {
    fontSize: 14,
    color: '#B8B5C3',
    paddingTop: 40,
    paddingBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#B8B5C3',
    paddingTop: 8,
    paddingBottom: 24,
  },
  textItem: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
