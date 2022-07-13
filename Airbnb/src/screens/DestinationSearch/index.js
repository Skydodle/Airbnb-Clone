import React, {useState} from 'react';
import {View, FlatList, Text, TextInput} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import SearchResults from '../../../assets/data/search';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');

  return (
    <View styles={styles.container}>
      {/* input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* list of destination */}
      <FlatList
        data={SearchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
