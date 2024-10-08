import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Importar as telas
import cronometro from './screens/cronometro';
import FortuneCookieApp from './screens/FortuneCookieApp';
// Ainda precisamos criar as telas de coach e contador
import QuotesApp from './screens/QuotesApp';
import contadorFregues from './screens/contadorFregues';
import Aula from './screens/aula'; // Ajustei a importação para manter consistência com o Stack.Navigator

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escolha uma aplicação:</Text>

      {/* Botão personalizado para "Cronômetro" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cronometro')}>
        <Text style={styles.buttonText}>IR PARA O CRONÔMETRO</Text>
      </TouchableOpacity>

      {/* Botão personalizado para "Biscoito da Sorte" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FortuneCookieApp')}>
        <Text style={styles.buttonText}>IR PARA BISCOITO DA SORTE</Text>
      </TouchableOpacity>

      {/* Botão personalizado para "Aplicativo de Coach" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuotesApp')}>
        <Text style={styles.buttonText}>IR PARA APLICATIVO DE COACH</Text>
      </TouchableOpacity>

      {/* Botão personalizado para "Aplicativo da aula" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Aula')}>
        <Text style={styles.buttonText}>IR PARA APLICATIVO DA AULA</Text>
      </TouchableOpacity>

      {/* Botão personalizado para "Contador de Freguês" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('contadorFregues')}>
        <Text style={styles.buttonText}>IR PARA CONTADOR DE FREGUÊS</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="cronometro" component={cronometro} />
        <Stack.Screen name="FortuneCookieApp" component={FortuneCookieApp} />
        <Stack.Screen name="QuotesApp" component={QuotesApp} />
        <Stack.Screen name="contadorFregues" component={contadorFregues} />
        <Stack.Screen name="Aula" component={Aula} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Adicionando estilos para espaçamento e botões maiores
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 20, // Aumentado para deixar o botão maior
    paddingHorizontal: 30, // Aumentado para deixar o botão maior
    borderRadius: 10, // Borda arredondada
    marginVertical: 10, // Espaçamento vertical entre os botões
    width: 250, // Aumentado para deixar o botão maior
    alignItems: 'center', // Centralizando o texto do botão
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Garantindo que o texto esteja totalmente centralizado
  },
});
