import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import Card from './Card';

const ImageItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.centered}>
      <TouchableCmp onPress={props.onSelect} useForeground>
        <Image style={styles.image} source={props.source} />
      </TouchableCmp>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text>Intrusion</Text>
          <Text>Camera1</Text>
        </View>
        <View>
          <Text>ServerName</Text>
          <Text>9:30:46 AM</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 380,
    height: 200,
    marginVertical: 8,
  },
});

export default ImageItem;
