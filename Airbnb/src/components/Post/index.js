import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        Just some random dummy text description that I need to fill into this
        tester component for the flat list.
      </Text>

      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.price}> $30 </Text>/ night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
