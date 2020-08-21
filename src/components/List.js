import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function List() {
  return (
    <View style={styles.list}>
      <Text>Тут будет список записей</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 10,
    //height: '83%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});
