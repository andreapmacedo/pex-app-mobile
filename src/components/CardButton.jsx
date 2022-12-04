import { StyleSheet } from 'react-native';
import { Button as CardButtonNativeBase, Text } from 'native-base';

export function CardButton({ title, ...rest }) {

  return (
    <CardButtonNativeBase
      colorScheme="green"
      size="lg"
      style={styles.container}
      {...rest}
    >
      <Text
        style={styles.title}
        fontSize="sm"
      >
        {title}
      </Text>
    </CardButtonNativeBase>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f09200',
    width: 125,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title : {
    color: '#fff',
  },
})