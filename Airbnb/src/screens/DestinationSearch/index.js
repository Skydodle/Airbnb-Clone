import React, {useState} from 'react';
import {View, FlatList, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import SearchResults from '../../../assets/data/search';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');

  const navigation = useNavigation();

  return (
    <View styles={styles.container}>
      {/* input component */}
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyAlrJyjVVQjiccofKNGljXBVAGLocr4njY',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
