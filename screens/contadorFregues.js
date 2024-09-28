import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ContadorFregues() {
  const [peopleCount, setPeopleCount] = useState(0); // Estado para armazenar o número de pessoas

  // Função para incrementar o número de pessoas
  const incrementCount = () => {
    setPeopleCount(peopleCount + 1);
  };

  // Função para decrementar o número de pessoas
  const decrementCount = () => {
    if (peopleCount > 0) {
      setPeopleCount(peopleCount - 1);
    }
  };

  // Função para zerar o contador
  const resetCount = () => {
    setPeopleCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Freguês</Text>

      <Text style={styles.counter}>Pessoas no restaurante: {peopleCount}</Text>

      <View style={styles.buttonContainer}>
        {/* Botão para adicionar pessoas */}
        <TouchableOpacity style={styles.button} onPress={incrementCount}>
          <Text style={styles.buttonText}>Entrou +1</Text>
        </TouchableOpacity>

        {/* Botão para remover pessoas */}
        <TouchableOpacity style={styles.button} onPress={decrementCount}>
          <Text style={styles.buttonText}>Saiu -1</Text>
        </TouchableOpacity>
      </View>

      {/* Botão para zerar o contador */}
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetCount}>
        <Text style={styles.buttonText}>Zerar Fregueses</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  resetButton: {
    backgroundColor: '#FF6347', 
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
