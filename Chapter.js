import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChaptersScreen = ({ route }) => {
  const { chapters } = route.params;

  return (
    <View style={styles.container}>
      {chapters.map((chapter, index) => (
        <Text key={index} style={styles.chapterText}>
          {chapter}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chapterText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ChaptersScreen;
