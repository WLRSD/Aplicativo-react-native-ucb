import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Imagens do biscoito (substitua pelos links corretos ou adicione imagens locais)
const closedCookieImage = 'https://img.freepik.com/fotos-gratis/biscoito-da-sorte-com-papel_144627-21548.jpg?size=626&ext=jpg'; // Substitua pelo link correto
const openCookieImage = 'https://image.freepik.com/fotos-gratis/biscoito-da-sorte-com-papel_144627-21551.jpg'; // Substitua pelo link correto

export default function FortuneCookieApp() {
  // Array de frases de sorte
  const fortunes = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
  ];

  const [fortune, setFortune] = useState(''); // Estado para armazenar a frase
  const [cookieBroken, setCookieBroken] = useState(false); // Estado para verificar se o biscoito foi quebrado

  // Função para "quebrar" o biscoito e exibir uma frase
  const breakCookie = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setCookieBroken(true);
  };

  // Função para "reiniciar" o biscoito e retornar ao estado inicial
  const resetCookie = () => {
    setCookieBroken(false); // Volta ao estado do biscoito fechado
    setFortune(''); // Remove a frase anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quebre o Biscoito da Sorte!</Text>

      {/* Exibir imagem do biscoito: fechado ou aberto */}
      <Image
        source={{ uri: cookieBroken ? openCookieImage : closedCookieImage }}
        style={styles.cookieImage}
      />

      {/* Exibir a frase de sorte se o biscoito estiver quebrado */}
      {cookieBroken && <Text style={styles.fortuneText}>{fortune}</Text>}

      {/* Botão para "quebrar" ou "tentar novamente" */}
      <TouchableOpacity
        style={styles.button}
        onPress={cookieBroken ? resetCookie : breakCookie} // Muda o comportamento do botão
      >
        <Text style={styles.buttonText}>
          {cookieBroken ? 'Tentar Novamente' : 'Quebrar Biscoito'}
        </Text>
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
  },
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fortuneText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
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
