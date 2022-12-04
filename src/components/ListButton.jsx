import { StyleSheet } from 'react-native';
import { Button, Text, Center } from 'native-base';

export function ListButton({ title, ...rest  }) {

  return (
    <Button
      style={styles.button}
      title={title}
      m={1}
      rounded={25}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text> 
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: '#F1F0F3',
    borderWidth: 1,
  },
  title: {

  },
});