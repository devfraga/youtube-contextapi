import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
   <View style={styles.container}>
     <Text>Pagina Home</Text>

     <Button 
     title="Acessar pedidos"
     onPress={() => navigation.navigate("Pedidos")}
     />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})