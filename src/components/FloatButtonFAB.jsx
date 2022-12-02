import { Button as FloatButtonNativeBase, Text } from 'native-base';

export function FloatButtonFAB({ title, ...rest }) {

  return (
    <FloatButtonNativeBase
      colorScheme="orange"
      size="lg"
      w={16}
      h={16}
      rounded={50}
      _pressed{...{
        bg: 'orange.500'
      }}
      {...rest}
    >
      <Text
        color="white"
        fontSize="sm"
      >
        {title}
      </Text>
    </FloatButtonNativeBase>
  );
}