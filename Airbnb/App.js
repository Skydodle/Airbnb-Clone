/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import HomeScreen from './src/screens/Home';
// import Post from './src/components/Post';
// import SearchResultsScreen from './src/screens/SearchResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/Guests';

import feed from './assets/data/feed';

import Router from './src/navigation/Router';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <Router />
    </>
    // <SafeAreaView>
    //   <HomeScreen />
    //   {/* <Post post={post1} /> */}
    //   {/* <SearchResultsScreen /> */}
    //   {/* <DestinationSearchScreen /> */}
    //   {/* <GuestsScreen /> */}
    // </SafeAreaView>
  );
};

export default App;
