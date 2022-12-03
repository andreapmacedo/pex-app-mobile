// import { View, Button } from 'native-base';
import { View } from 'native-base';
import { StyleSheet, Text, Image, Button } from 'react-native';
import productImg1 from '../assets/product-img-1.png';
import { CardButton } from '@components/CardButton';
// import { VStack, Text, Heading, Image } from 'native-base';
// import { Dimensions } from 'react-native';
// const windowWidth = Dimensions.get('window').width;


export function ProductCard() {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={productImg1}
      />
      <Text style={styles.textCategory} >Louças e metais</Text>
      <Text style={styles.textDescription} >Torneira Puravida Hansgrohe</Text>
      < CardButton 
        title="Comprar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 150,
    // height: 223,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
    borderColor: '#f8f8f8',
    borderWidth: 1,
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
});