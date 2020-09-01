import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

export const Element = ({ task, onRemove, onOpen }) => {
  
  return (
    <TouchableOpacity
      style={styles.case}
      activeOpacity={0.5}
      //onPress={() => onOpen(task.id)}
      //onLongPress={onRemove.bind(null, task.id)}
    >
      <View style={styles.todo}>
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
  }
}) 