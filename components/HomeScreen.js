import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

import ImageItem from './UIComponents/ImageItem';
import DetailsScreen from './DetailsScreen';

export const images = [
  require('../assets/20863195.jpg'),
  require('../assets/26660824.jpg'),
  require('../assets/27286709.jpg'),
  require('../assets/27466095.jpg'),
  require('../assets/35741062.jpg'),
  require('../assets/38068084.jpg'),
];

const HomeScreen = props => {
  const selectImageItemHandler = id => {
    console.log(id);
    props.navigation.navigate('Details Screen', {
      imageId: id,
    });
  };

  return (
    <FlatList
      data={images}
      renderItem={itemData => (
        <ImageItem
          source={itemData.item}
          onSelect={selectImageItemHandler.bind(this, itemData.index)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
