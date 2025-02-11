import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Switch, Button, Modal, ActivityIndicator, StatusBar, Alert, Pressable } from 'react-native';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showAlert = () => {
    Alert.alert("Notification", "This is a simple alert message!", [{ text: "OK" }]);
  };

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, isDarkMode && styles.darkContainer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#333' : '#F9F9F9'} />
      
      <Text style={[styles.header, isDarkMode && styles.darkText]}>React Native App</Text>
      
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />
      
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        placeholder="Enter your name..."
        placeholderTextColor={isDarkMode ? "#ccc" : "#777"}
        value={name}
        onChangeText={setName}
      />
      
      <Text style={[styles.infoText, isDarkMode && styles.darkText]}>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
      
      <Text style={[styles.output, isDarkMode && styles.darkOutput]}>
        {name ? `${name}!` : "Welcome!"}
      </Text>
      
      
      <Pressable style={styles.card} onPress={() => setModalVisible(true)}>
        <Text style={styles.cardText}>Tap to Open Modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Hello from the Modal!</Text>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={styles.toggleButton} onPress={toggleLoading}>
        <Text style={styles.buttonText}>
          {loading ? "Hide Loader" : "Show Loader"}
        </Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color={isDarkMode ? '#9E9E9E' : '#4CAF50'} />}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
  },
  darkText: {
    color: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#777',
    padding: 14,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 18,
    color: '#444',
  },
  darkInput: {
    backgroundColor: '#444',
    color: '#FFF',
    borderColor: '#999',
  },
  infoText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#444',
  },
  output: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#EEE',
    padding: 14,
    borderRadius: 8,
    width: '90%',
  },
  darkOutput: {
    backgroundColor: '#555',
    color: '#FFD700',
  },
  card: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 40, 
    alignItems: 'center',
    width: '80%',
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  modalContent: {
    width: 300,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 24,
    color: '#444',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#888',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  toggleButton: {
    backgroundColor: 'gray',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 12,
    alignItems: 'center',
    width: '80%',
    elevation: 5,
  },
});

export default App;
