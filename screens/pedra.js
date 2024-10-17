import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

const AppJogo = () => {
  const [jogadaUsuario, setJogadaUsuario] = useState('');
  const [jogadaApp, setJogadaApp] = useState('');
  const [resultado, setResultado] = useState('');

  const jogar = (opcao) => {
    const jogadaApp = opcoes[Math.floor(Math.random() * 3)];
    setJogadaUsuario(opcao);
    setJogadaApp(jogadaApp);
    definirResultado(opcao, jogadaApp);
  };

  const definirResultado = (usuario, app) => {
    if (usuario === app) {
      setResultado('Empate!');
    } else if (
      (usuario === 'Pedra' && app === 'Tesoura') ||
      (usuario === 'Tesoura' && app === 'Papel') ||
      (usuario === 'Papel' && app === 'Pedra')
    ) {
      setResultado('Você ganhou!');
    } else {
      setResultado('Você perdeu!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>
      <View style={styles.options}>
        {opcoes.map((opcao) => (
          <TouchableOpacity key={opcao} onPress={() => jogar(opcao)} style={styles.button}>
            <Text>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>Você: {jogadaUsuario}</Text>
      <Text>App: {jogadaApp}</Text>
      <Text style={styles.result}>{resultado}</Text>
      <Button title="Jogar Novamente" onPress={() => setResultado('')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppJogo;
