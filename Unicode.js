import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const baseUrl = 'http://139.59.177.72/';

const UnicodeBooks = () => {
  const [unicodeBooks, setUnicodeBooks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://139.59.177.72/api/books?page=1')
      .then((response) => response.json())
      .then((data) => {
        const unicodeBooksData = data.data.filter((book) => book.bookType === 'UNICODE');
        setUnicodeBooks(unicodeBooksData);
      })
      .catch((error) => {
        console.error('Error fetching UNICODE books:', error);
      });
  }, []);

  const handleBookPress = (book) => {
    navigation.navigate('Chapters', { chapters: book.chapters });
  };

  return (
    <FlatList
      data={unicodeBooks}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleBookPress(item)}>
          <View style={styles.flatListItem}>
            <Image source={{ uri: baseUrl + item.coverPhotoUri }} style={styles.bookImage} />
            <Text style={styles.bookName}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatListItem: {
    backgroundColor: 'white',
    width: 150, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    margin: 5,
  },
  bookImage: {
    width: 150, // Should match the width above
    height: 150, // Should match the height above
  },
  bookName: {
    textAlign: 'center',
  },
});

export default UnicodeBooks;
