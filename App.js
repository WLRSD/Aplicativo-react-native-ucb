import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Importar as telas existentes
import cronometro from './screens/cronometro';
import FortuneCookieApp from './screens/FortuneCookieApp';
import QuotesApp from './screens/QuotesApp';
import contadorFregues from './screens/contadorFregues';
import Aula from './screens/aula';
import Aplica from './screens/Aplica';

// Importar os novos aplicativos
import Gaso from './screens/gaso';
import IMC from './screens/imc';
import Pedra from './screens/pedra';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.text}>Escolha uma aplicação:</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cronometro')}>
        <Text style={styles.buttonText}>IR PARA O CRONÔMETRO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FortuneCookieApp')}>
        <Text style={styles.buttonText}>IR PARA BISCOITO DA SORTE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuotesApp')}>
        <Text style={styles.buttonText}>IR PARA APLICATIVO DE COACH</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Aula')}>
        <Text style={styles.buttonText}>IR PARA APLICATIVO DA AULA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('contadorFregues')}>
        <Text style={styles.buttonText}>IR PARA CONTADOR DE FREGUÊS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Aplica')}>
        <Text style={styles.buttonText}>IR PARA APLICAÇÃO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IMC')}>
        <Text style={styles.buttonText}>IR PARA CALCULADORA DE IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gaso')}>
        <Text style={styles.buttonText}>IR PARA COMPARAÇÃO DE COMBUSTÍVEL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pedra')}>
        <Text style={styles.buttonText}>IR PARA PEDRA, PAPEL E TESOURA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="cronometro" component={cronometro} />
        <Stack.Screen name="FortuneCookieApp" component={FortuneCookieApp} />
        <Stack.Screen name="QuotesApp" component={QuotesApp} />
        <Stack.Screen name="contadorFregues" component={contadorFregues} />
        <Stack.Screen name="Aula" component={Aula} />
        <Stack.Screen name="Aplica" component={Aplica} />
        <Stack.Screen name="IMC" component={IMC} />
        <Stack.Screen name="Gaso" component={Gaso} />
        <Stack.Screen name="Pedra" component={Pedra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
