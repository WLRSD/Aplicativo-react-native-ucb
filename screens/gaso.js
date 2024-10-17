import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const AppCombustivel = () => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularVantagem = () => {
    const relacao = parseFloat(alcool) / parseFloat(gasolina);
    const mensagem = relacao < 0.7 ? 'Abasteça com Álcool' : 'Abasteça com Gasolina';
    setResultado(mensagem);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.designi.com.br/images/preview/11029432.jpg' }} style={styles.image} />
      <TextInput
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        style={styles.input}
        value={alcool}
        onChangeText={setAlcool}
      />
      <TextInput
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        style={styles.input}
        value={gasolina}
        onChangeText={setGasolina}
      />
      <Button title="Calcular" onPress={calcularVantagem} />
      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppCombustivel;
