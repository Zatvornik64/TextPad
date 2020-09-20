import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, Button } from 'react-native';
import { Element } from './Element';
import { ListModal } from './ListModal';

export function List({tasks, selected, setSelected, setEditorOpen, deleteTask, title, text}) {
  const [modalOpen, setModalOpen] = useState(false);
  
  tasks.forEach((item, i) => item.key = i.toString()) 

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item) => item.key}
        data={tasks}
        renderItem={({ item }) => (
          <Element
            task={item}
            setModalOpen={setModalOpen}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      />
      <ListModal
        setSelected={setSelected}
        setEditorOpen={setEditorOpen}
        deleteTask={deleteTask}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        title={title}
        text={text}
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
    //borderStyle: 'solid',
    //borderBottomWidth: 2,
    //borderBottomColor: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  button: {
    width: 200,
    marginVertical: 10,
  },
});
