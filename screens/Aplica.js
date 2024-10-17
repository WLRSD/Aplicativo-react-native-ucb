import React from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const App = () => {
  const cardData = [
    { id: '1', title: 'Card 1' },
    { id: '2', title: 'Card 2' },
    { id: '3', title: 'Card 3' },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://www.designi.com.br/images/preview/11029432.jpg' }} 
        style={styles.cardImage} 
      />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topButtons}>
        <Button title="B1" onPress={() => {}} />
        <Button title="B2" onPress={() => {}} />
        <Button title="B3" onPress={() => {}} />
        <Button title="B4" onPress={() => {}} />
        <Button title="B5" onPress={() => {}} />
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://www.designi.com.br/images/preview/11029432.jpg' }} 
          style={styles.image} 
        />
        <TouchableOpacity style={styles.topLeftButton}>
          <Text>Clica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topRightButton}>
          <Text>Clica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomRightButton}>
          <Text>Clica</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cardData}
        horizontal
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        style={styles.cardList}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.roundButton}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text>🔄</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text>📷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text>⚙</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 10,
  },
  topLeftButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  topRightButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  bottomRightButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  cardList: {
    marginBottom: 20,
  },
  card: {
    width: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  roundButton: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
