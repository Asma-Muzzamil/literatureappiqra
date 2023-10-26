import React from 'react';
import { View, Text, Image, FlatList, StyleSheet , TextInput} from 'react-native';
import GetRequest from './GetRequest';
import UnicodeBooks from './Unicode';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Text style={styles.boldText}>Featured</Text>
        <Image source={require('./msgbox.png')} style={{ marginLeft: 'auto', marginRight: 10, width: 30, height: 30 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
      <Image source={require('./search.jpg')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="gray"
        />
      </View>

      {/* Horizontal Flat List (Add your data here) */}
      <GetRequest />

      {/* "Searchable Books" Section */}
      <View style={styles.searchableBooks}>
        <Text style={ styles.blueText}>Searchable books</Text>
        <Text style={[styles.greenText, { marginLeft: 'auto' }]}>More+</Text>
      </View>


      <UnicodeBooks />


      <View style={styles.bottomNavbar}>
        <View style={styles.navbarIcon}>
          <Image source={require('./home.png')} style={styles.searchIcon} />
          <Text style={styles.whiteText}>Home</Text>
        </View>
        <View style={styles.navbarIcon}>
          <Image source={require('./audio.png')} style={styles.searchIcon} />
          <Text style={styles.whiteText}>audio</Text>
        </View>
        <View style={styles.navbarIcon}>
          <Image source={require('./settings.png')} style={styles.searchIcon} />
          <Text style={styles.whiteText}>settings</Text>
        </View>
        <View style={styles.navbarIcon}>
          <Image source={require('./searchN.png')} style={styles.searchIcon} />
          <Text style={styles.whiteText}>search</Text>
        </View>
      </View>
    </View>
  );
}

// Styles using StyleSheet.create
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    width : "100%"
  },
  boldText: {
    fontWeight: 'bold',
    fontSize : 30
  },

  searchIcon: {
    width: 20,
    height: 20,

  },
  searchSection: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
     width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'right',
  },
  flatListItem: {
    backgroundColor: 'white',
    width: 100,
    height: 150,
    margin: 5,
  },
  searchableBooks: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  blueText: {
    color: 'blue',
    fontSize : 20,
    fontWeight :"bold"
  },
  greenText: {
    color: 'green',
  },
  bottomNavbar: {
    backgroundColor: 'blue',
    height: 40,
    flexDirection: 'row',
  },
  navbarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
});
