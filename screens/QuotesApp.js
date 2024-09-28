import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Importar as citações diretamente do arquivo JSON
const quotesData = require('../assets/quotes.json');

export default function CoachApp() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  // Função para gerar uma nova citação aleatória
  const generateRandomQuote = () => {
    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setImage(randomQuote.image);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citação Inspiradora</Text>

      {image !== '' && <Image source={{ uri: image }} style={styles.image} />}

      {quote !== '' && (
        <View>
          <Text style={styles.quote}>"{quote}"</Text>
          <Text style={styles.author}>- {author}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={generateRandomQuote}>
        <Text style={styles.buttonText}>Nova Citação</Text>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
