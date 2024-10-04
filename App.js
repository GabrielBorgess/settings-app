import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [isNightMode, setIsNightMode] = useState(false);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  const currentStyles = theme === 'Escuro' || isNightMode ? styles.dark : styles.light;

  return (
    <SafeAreaView style={[styles.container, currentStyles]}>
      <Text style={[styles.title, currentStyles.text, { fontSize }]}>Picker, Slide e Switch</Text>

      <View style={styles.row}>
        <Text style={[styles.label, currentStyles.text, { fontSize }]}>Tema:</Text>
        <Picker
          selectedValue={theme}
          style={[styles.picker, currentStyles.text]}
          onValueChange={(itemValue) => setTheme(itemValue)}
        >
          <Picker.Item label="Claro" value="Claro" />
          <Picker.Item label="Escuro" value="Escuro" />
        </Picker>
      </View>

      <Text style={[styles.label, currentStyles.text, { fontSize }]}>Tamanho da Fonte:</Text>
      <Slider
        minimumValue={12}
        maximumValue={20}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(Math.round(value))}
        style={styles.slider}
      />
      <Text style={[styles.fontSizeText, currentStyles.text, { fontSize }]}>Tamanho atual: {fontSize}</Text>

      <View style={styles.row}>
        <Text style={[styles.label, currentStyles.text, { fontSize }]}>Modo Noturno:</Text>
        <Switch
          value={isNightMode}
          onValueChange={(value) => setIsNightMode(value)}
        />
      </View>
      <Text style={[currentStyles.text, { fontSize }]}>{isNightMode ? 'On' : 'Off'}</Text>

      <TouchableOpacity style={styles.resetButton} onPress={resetPreferences}>
        <Text style={styles.resetButtonText}>Resetar Preferências</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    width: 150,
  },
  fontSizeText: {
    fontSize: 16,
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 30
  },
  resetButton: {
    backgroundColor: 'darkblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    position: 'absolute',
    bottom: 30,
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  light: {
    backgroundColor: 'lightblue',
  },
  dark: {
    backgroundColor: '#333',
  },
});

export default App;
