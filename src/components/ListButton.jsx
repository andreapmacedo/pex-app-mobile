import { StyleSheet } from 'react-native';
import { Button, Text, Center } from 'native-base';

export function ListButton({ title, selected, ...rest  }) {

  return (
    <Button
      
      style={ selected === title ? styles.buttonSelected : styles.button }
      title={title}
      m={1}
      rounded={25}
      {...rest}
    >
      <Text 
        style={ selected === title ? styles.titleSelected : styles.title }  
      >
        {title}
      </Text> 
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: '#F1F0F3',
    borderWidth: 1,
  },
  buttonSelected: {
    backgroundColor: '#7B61FF',
    
  },
  title: {

  },
  titleSelected: {
    color: '#fff',
  },
});