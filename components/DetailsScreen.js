import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {images} from './HomeScreen';

const DetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Image source={images[props.route.params.imageId]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default DetailsScreen;
