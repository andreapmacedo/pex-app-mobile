import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { View, VStack, Actionsheet, Button, useDisclose, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export function ProductDetail() {

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
          // onPress={() => navigation.navigate('SignUp')}>
          onPress={onOpen}>
          <Feather name="upload" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* <Button onPress={onOpen}>Actionsheet</Button> */}

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>
            Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.
          </Actionsheet.Item>
          <Actionsheet.Item>Materials: 100% cotton, and lining Structured</Actionsheet.Item>
          <Actionsheet.Item>Adjustable cotton strap closure</Actionsheet.Item>
          <Actionsheet.Item>High quality embroidery stitching</Actionsheet.Item>
          <Actionsheet.Item>Head circumference: 21” - 24” / 54-62 cm</Actionsheet.Item>
          <Actionsheet.Item>Embroidery stitching</Actionsheet.Item>
          <Actionsheet.Item>One size fits most</Actionsheet.Item>
          {/* <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item> */}
        </Actionsheet.Content>
      </Actionsheet>
      
      <Text style={styles.describe}>
       Ultima atualização em Outrubro/2022
      </Text>
      <Text style={styles.title}>
        Temos de uso
      </Text>          

      <ScrollView style={styles.scrollView}>

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
  image: {
    marginTop: 64,
    alignSelf: 'center',
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
