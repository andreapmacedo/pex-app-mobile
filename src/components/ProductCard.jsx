// import { View, Button } from 'native-base';
import { View } from 'native-base';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ProductCard({ title, description, image }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
      />
      <Text style={styles.textCategory} >{ title }</Text>
      <Text style={styles.textDescription} > { description } </Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Product')}
      >
        <Text style={styles.buttonText}>
          Comprar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
    borderColor: '#f8f8f8',
    borderWidth: 1, 
    marginLeft: 16,

  },
  image: {
  },
  textCategory: {
    color: '#000',
    fontSize: 12,
    alignSelf: 'flex-start',
    color: '#999999',
    paddingLeft: 10,
    paddingTop: 10,
  }, 
  textDescription: {
    color: '#000',
    alignSelf: 'flex-start',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#ffffff',
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F09200',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});