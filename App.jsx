import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
        <StatusBar style="auto" />
        <AuthProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </AuthProvider>
        
    </NativeBaseProvider>
  );
}
 