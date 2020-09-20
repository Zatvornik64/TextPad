import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Header } from "./src/components/Header";
import { List } from "./src/components/List";
import { EmptyList } from "./src/components/EmptyList";
import { AddButton } from "./src/components/AddButton";
import { Editor } from "./src/components/Editor";
import { About } from "./src/components/About";

export default function App() {
  const [editorOpen, setEditorOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [tasks, setTasks] = useState([]);
  
  getValueFunction = () => {
    AsyncStorage.getItem('TASKS').then(value =>
      {
        if (value) setTasks( JSON.parse(value) );
      }
    );
  };
  //console.log(tasks)
  useEffect(() => {
    getValueFunction();
    }, []); 

  const addTask = (title, text) => {
    const newTask = [{
      id: new Date().toString(),
      title: title,
      text: text,
    }]
    setTasks([...tasks, ...newTask]);
    AsyncStorage.setItem('TASKS', JSON.stringify([...tasks, ...newTask]));
  };
  const editTask = (title, text) => {
    const newTask = [...tasks];
    newTask.forEach(item => {
      if (item.id === selected) {
        item.title = title;
        item.text = text;
      }
    })
    setTasks([...newTask]);
    AsyncStorage.setItem('TASKS', JSON.stringify([...newTask]));
  };
  const deleteTask = () => {
    setTasks([...tasks.filter(item => item.id !== selected)]);
    AsyncStorage.setItem('TASKS', JSON.stringify([...tasks.filter(item => item.id !== selected)]));
  };

  const title = selected ? tasks.find(item => item.id === selected).title : null;
  const text = selected ? tasks.find(item => item.id === selected).text : null;

  return (
    <View style={styles.container}>
      {(!editorOpen && !aboutOpen) && (
        <>
          <Header 
            setAboutOpen={setAboutOpen} 
          />
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
      {(editorOpen && !aboutOpen) && (
        <>
          <Header 
            setAboutOpen={setAboutOpen}
          />
          <Editor
            setEditorOpen={setEditorOpen}
            addTask={addTask}
            editTask={editTask}
            title={title}
            text={text}
            setSelected={setSelected}
          />
        </>
      )}
      {aboutOpen && (
        <>
          <Header 
            setAboutOpen={setAboutOpen}
          />
          <About
            setAboutOpen={setAboutOpen}
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
