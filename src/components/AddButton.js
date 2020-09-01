import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function AddButton(props) {
  return (
    <View style={styles.add}>
      {/*<Button
        style={styles.button}
        title="Добавить"
        //color="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}
      />*/}
      <TouchableOpacity
        style={styles.button}
        onPress={()=> props.setEditorOpen(true)}
        >
        <Text style={styles.text}>ДОБАВИТЬ</Text>
      </TouchableOpacity>
      {/*<Text style={styles.text}>+</Text>*/}
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
    backgroundColor: '#78e',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

    //borderStyle: 'solid',
    //borderBottomWidth: 2,
    //borderBottomColor: 'red',
  },
  text: {
    //flex: 1,
    //height: '4%',
    color: "#f00",
    fontSize: 20,
  }
});
