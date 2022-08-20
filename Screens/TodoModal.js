import { View, Text, StyleSheet, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from "react";
import {AntDesign, Ionicons} from '@expo/vector-icons'


export default function TodoModal (props) {

  const completedCount = props.list.todo.filter(todo => todo.completed).length;
  const taskCount = props.list.todo.length;

  const [changeValue, setChangeValue] = useState({
    name: props.list.name,
    color: props.list.color,
    todo: props.list.todo,
    
  });

  const toggleTodoCompleted = (index) =>{
    let list = props.list;
    list.todo[index].completed = !list.todo[index].completed;

    props.updateList(list);
  }

  const renderTodo = (todo, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => toggleTodoCompleted(index)}>
          <Ionicons name={todo.completed ? "ios-square" : "ios-square-outline"} 
          size={24} 
          color={color.gray} 
          style={{width: 32}}>
          </Ionicons>
        </TouchableOpacity>

        <Text style={[styles.todos, {textDecorationLine: todo.completed ? "line-through" : "none",
        color: todo.completed ? color.gray : color.black}]}>
          {todo.title}
        </Text>
      </View>
    )
  }


  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior = "padding">
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={{position: 'absolute', top: 32, right: 32, zIndex: 10}} onPress={() => props.closeModal()}>
        <AntDesign name="close" size={24} color={color.black}/>
        </TouchableOpacity>
        <View style={[styles.section, styles.header, {borderBottomColor: changeValue.color}]}>
          <View>
            <Text style={styles.title}>{changeValue.name}</Text>
            <Text style={styles.taskCount}>
              {completedCount} of {taskCount} tasks
            </Text>
          </View>
        </View>

        <View style={[styles.section, {flex: 3}]}>
          <FlatList
          data={changeValue.todo}
          renderItem={({item, index}) => renderTodo(item, index)}
          keyExtractor = {item => item.title}
          contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}
          showsVerticalScrollIndicator= {false}/>
        </View>

        <View style={[styles.section, styles.footer]} behavior= 'padding'>
          <TextInput style={[styles.input, {borderColor: changeValue.color}]}/>
          <TouchableOpacity style={[styles.addTodo, {backgroundColor: changeValue.color}]}>
          <AntDesign name="plus" size={16} color={color.white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  section: {
    flex: 1,
    alignSelf: 'stretch',
  },

  header: {
    justifyContent: 'flex-end',
    marginLeft: 64,
    borderBottomWidth: 3
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: color.black,
  },

  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: color.gray,
    fontWeight: '600'
  },

  footer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8
  },

  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },

  todoContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  todos: {
    color: color.black,
    fontWeight: '700',
    fontSize: 16
  }
})