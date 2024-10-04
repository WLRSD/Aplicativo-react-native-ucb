import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const Aula = () => {
  // Estados iniciais
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [nightMode, setNightMode] = useState(false);

  // Função de resetar preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setNightMode(false);
  };

  // Alteração de tema baseado na escolha
  const getContainerStyle = () => {
    if (theme === 'Escuro' || nightMode) {
      return styles.containerDark;
    } else {
      return styles.containerLight;
    }
  };

  const getTextStyle = () => {
    if (theme === 'Escuro' || nightMode) {
      return styles.textDark;
    } else {
      return styles.textLight;
    }
  };

  return (
    <View style={getContainerStyle()}>
      <Text style={[styles.title, getTextStyle()]}>Configurações de Preferências</Text>

      
      <Text style={[styles.label, getTextStyle()]}>Tema:</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => setTheme(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

    
      <Text style={[styles.label, getTextStyle()]}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={12}
        maximumValue={30}
        step={1}  
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#1EB1FC"
      />

      
      <Text style={[styles.label, getTextStyle()]}>
        Modo Noturno: {nightMode ? 'Ativado' : 'Desativado'}
      </Text>
      <Switch
        value={nightMode}
        onValueChange={(value) => setNightMode(value)}
      />

      
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  containerDark: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
  },
  textLight: {
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
});

export default Aula;
