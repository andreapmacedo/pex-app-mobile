import { Button as FloatButtonNativeBase, Text } from 'native-base';

export function FloatButton({ title, ...rest }) {

  return (
    <FloatButtonNativeBase
      colorScheme="green"
      size="lg"
      {...rest}
    >
      <Text
        fontSize="sm"
      >
        {title}
      </Text>
    </FloatButtonNativeBase>
  );
}