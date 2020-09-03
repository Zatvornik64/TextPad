import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "./src/components/Header";
import { List } from "./src/components/List";
import { EmptyList } from "./src/components/EmptyList";
import { AddButton } from "./src/components/AddButton";
import { Editor } from "./src/components/Editor";

export default function App() {
  const [editorOpen, setEditorOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = [{
      id: new Date().toString(),
      title: text,
    }]
    setTasks([...tasks, ...newTask])
  };
  const editTask = (text) => {
    const newTask = [...tasks];
    newTask.forEach(item => {
      if (item.id === selected) item.title = text
    })
    setTasks([...newTask])
  };
  const deleteTask = () => {
    setTasks([...tasks.filter(item => item.id !== selected)])
  };

  const title = selected ? tasks.find(item => item.id === selected).title : null;

  return (
    <View style={styles.container}>
      {!editorOpen && (
        <>
          <Header />
          {!tasks.length ? (
              <EmptyList />
            ) : (
              <List
                tasks={tasks}
                selected={selected}
                setSelected={setSelected}
                setEditorOpen={setEditorOpen}
                deleteTask={deleteTask}
            />
            )}
          <AddButton setEditorOpen={setEditorOpen} />
        </>
      )}
      {editorOpen && (
        <>
          <Header />
          <Editor
            setEditorOpen={setEditorOpen}
            addTask={addTask}
            editTask={editTask}
            value={title}
            setSelected={setSelected}
          />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
