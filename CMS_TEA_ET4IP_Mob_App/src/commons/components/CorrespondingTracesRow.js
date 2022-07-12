import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {COLOR3, COLOR4, COLOR5} from '../styles/colors';

export default ({text, onPress}) => {
  return (
    <Pressable style={LOCAL_STYLES.MAIN_CONTAINER} onPress={onPress}>
    <Text style={LOCAL_STYLES.ITEM_TEXT}>{text}</Text>
  </Pressable>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  MAIN_CONTAINER: {
    alignSelf: 'center',
    width: '80%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'COLOR3',
    marginTop: 10,
  },
  ITEM_TEXT: {
    flex: 1,
    fontSize: widthPercentageToDP('3%'),
    color: COLOR5,
  },
});