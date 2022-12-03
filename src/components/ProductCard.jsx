import { View } from 'native-base';
import { StyleSheet, Text } from 'react-native';
// import { VStack, Text, Heading, Image } from 'native-base';
// import { Dimensions } from 'react-native';
// const windowWidth = Dimensions.get('window').width;

export function ProductCard() {

  return (
    <View style={styles.container}>
      <Text>OnBoarding</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    width: 150,
    height: 200,
    // paddingLeft: windowWidth / 2,
  },
});