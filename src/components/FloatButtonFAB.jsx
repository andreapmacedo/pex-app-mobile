import { Button as FloatButtonNativeBase, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export function FloatButtonFAB({ title, ...rest }) {

  return (
    <FloatButtonNativeBase
      colorScheme="#F09200"
      size="lg"
      w={16}
      h={16}
      rounded={50}
      _pressed{...{
        bg: 'orange.500'
      }}
      {...rest}
    >
      <AntDesign name="arrowright" size={24} color="#fff" />
      {/* <Text
        color="white"
        fontSize="sm"
      >
        {title}
      </Text> */}
    </FloatButtonNativeBase>
  );
}