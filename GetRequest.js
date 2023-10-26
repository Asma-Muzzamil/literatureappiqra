import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const baseUrl = 'http://139.59.177.72/';

const GetRequest = () => {
  const [pdfBooks, setPdfBooks] = useState([]);

  useEffect(() => {
    fetch('http://139.59.177.72/api/books?page=1')
      .then((response) => response.json())
      .then((data) => {
        const pdfBooksData = data.data.filter((book) => book.bookType === 'PDF');
        setPdfBooks(pdfBooksData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <FlatList
      data={pdfBooks}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.flatListItem}>
          <Image source={{ uri: baseUrl + item.coverPhotoUri }} style={styles.bookImage} />
          <Text style={styles.bookName}>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatListItem: {
    backgroundColor: 'white',
    width: 150, 
    height: 200, 
    margin: 5,
  },
  bookImage: {
    width: 150, 
    height: 150, 
  },
  bookName: {
    textAlign: 'center',
  },
});

export default GetRequest;
