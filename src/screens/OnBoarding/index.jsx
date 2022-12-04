import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import logoPex from '../../assets/logo-pex.png';
import arrowImg from '../../assets/arrow.png';
import { VStack, Text, Heading, Image } from 'native-base';
import { FloatButton } from '@components/FloatButton';
import { FloatButtonFAB } from '@components/FloatButtonFAB';

export function OnBoarding() {

  const navigation = useNavigation();

  function handleNavigateToLogin() {
    navigation.navigate('Login');
  }

  return (
      <VStack flex={1}
        padding={8}
        alignItems="center"
        justifyContent="center"
      >
      
        <Image
          source={arrowImg}
          alt="arrow"
          resizeMode='contain'
          position='absolute'
          top={-25}
          left={35}
        />
        
        <Image
          source={logoPex}
          defaultSource={logoPex}
          alt="logo"
          alignSelf="center"
          marginBottom={32}
        />

        <Heading paddingTop={8} paddingBottom={18} >
          Bem vindo a PEX
        </Heading>
        
        <Text fontSize={14} textAlign="center">
          Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma ou construção nós iremos te auxiliar em tudo.
        </Text>

        <FloatButton 
          title="Pular"
          position='absolute'
          backgroundColor='transparent'
          top={16}
          right={8}
          onPress={handleNavigateToLogin}
        />
        <FloatButtonFAB 
          title="->"
          position='absolute'
          // backgroundColor='transparent'
          bottom={16}
          right={8}
          onPress={handleNavigateToLogin}
          
        />

        {/* <Button 
          title="->"
          position='absolute'
          backgroundColor='orange.500'
          borderRadius={50}
          
          // fontSize={14}
          bottom={16}
          right={8}
        /> */}
        
          
      </VStack>
  );
  // return (
  //   <View style={styles.container}>
  //     <ImageBackground source={arrowImg}  resizeMode="contain" style={styles.image}>
  //       <Image
  //         style={styles.logo}
  //         source={logoPex}
  //       />
  //       <Text style={styles.title}>Bem vindo a PEX</Text>
  //       <Text style={styles.describe}>Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma ou construção nós iremos te auxiliar em tudo.</Text>
  //     </ImageBackground>
  //   </View>
  // );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    // paddingBottom: 220,
    // width: 150,
    // top: 0,
    
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    // flex: 1,
    // justifyContent: "center",
    padding: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  describe: {
    // flex: 1,
    // justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 14,
    textAlign: 'center',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     alignSelf: 'center',
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
// });
