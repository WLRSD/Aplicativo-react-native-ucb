/*PARA RODAR, TIRA A POHA DO AVAST*/
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState([]);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const pause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setHistory((prevHistory) => [...prevHistory, formatTime(time)]);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timer}>{formatTime(time)}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Iniciar" onPress={start} />
        <Button title="Pausar" onPress={pause} />
        <Button title="Reiniciar" onPress={reset} />
      </View>

      <ScrollView style={styles.historyContainer}>
        {history.map((entry, index) => (
          <Text key={index} style={styles.historyEntry}>
            Reiniciado em: {entry}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20, // Adiciona espaçamento geral
  },
  timeContainer: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    width: 250, // Ajuste para ficar mais compacto
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Adiciona mais margem superior
  },
  timer: {
    fontSize: 48,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  historyContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '70%', // Reduz a largura da caixa de histórico
    height: 100,  // Reduz a altura da caixa de histórico
    marginTop: 20,
  },
  historyEntry: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
