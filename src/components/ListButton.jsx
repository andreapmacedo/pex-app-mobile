import { StyleSheet } from 'react-native';
import { Button, Text, Center } from 'native-base';

export function ListButton({ title, ...rest  }) {

  return (
    <Button
      style={styles.button}
      title={title}
      
      m={1}
      rounded={25}
      
      // color="#f194ff"
      {...rest}
    >
      
        {/* <Text style={styles.title}><Center> {title}</Center> </Text> */}
        <Text style={styles.title}>{title}</Text>
      
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: '#F09200',
    borderWidth: 1,
    // height: 36, 
    // flex: 1,
    // color: '#f8f8f8',
    // padding: 10,
    // backgroundColor: '#f8f8f8',
    // justifyContent: 'center',
    // marginHorizontal: 16,
  },
  title: {
    // textAlign: 'center',
    // justifyContent: 'center',
    // marginVertical: 8,
    // fontSize: 12,
  },
});