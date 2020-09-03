import React from 'react';
import { StyleSheet, View, Modal, Button } from 'react-native';


export function ListModal({ setSelected, setEditorOpen, deleteTask, setModalOpen, modalOpen}) {
  
  return (
    <View style={styles.list}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.button}>
              <Button
                title="Назад"
                onPress={() => {
                  setSelected(null);
                  setModalOpen(false);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Редактировать"
                onPress={() => {
                  setEditorOpen(true);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Удалить"
                onPress={() => {
                  deleteTask();
                  setModalOpen(false);
                  setSelected(null);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
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
