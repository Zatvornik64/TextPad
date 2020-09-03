import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export function AddButton(props) {
  return (
    <View style={styles.add}>
      <TouchableOpacity
        style={styles.button}
        onPress={()=> props.setEditorOpen(true)}
        >
        <Text style={styles.text}>ДОБАВИТЬ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  add: {
    flex: 1,
  },
  button: {
    flex: 1,
    //height: '4%',
    color: "#f194ff",
    backgroundColor: '#eee',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

    borderStyle: 'solid',
    borderTopWidth: 2,
    borderTopColor: '#333',
  },
  text: {
    //flex: 1,
    //height: '4%',
    color: "#555",
    fontSize: 20,
  }
});
