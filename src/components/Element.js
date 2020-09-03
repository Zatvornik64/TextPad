import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

export const Element = ({ task, setModalOpen, selected, setSelected }) => {
  
  return (
    <TouchableOpacity
      style={styles.case}
      activeOpacity={0.5}
      //onPress={() => onOpen(task.id)}
      onLongPress={() => {
        setSelected(task.id);
        setModalOpen(true);
      }}
    >
      <View style={task.id === selected ? styles.selectedTodo : styles.todo}>
        <Text>{task.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  todo: {
    //flexDirection: 'row',
    //alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  case: {
    width: windowWidth
  },
  selectedTodo: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  }
}) 