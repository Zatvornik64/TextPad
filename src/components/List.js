import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Element } from './Element';


export default function List({tasks}) {

  tasks.forEach((item, i) => item.key = i.toString()) 
//console.log(tasks)
  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={item => item.key}
        data={tasks}
        renderItem={({ item }) => (
          <Element task={item} /> 
          //onRemove={removeTask} onOpen={openTask}
           
        )}
      /> 
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
