import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Заголовок</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    //height: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});
