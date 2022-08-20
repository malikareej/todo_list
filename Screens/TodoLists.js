import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { useState } from "react";
import TodoModal from "./TodoModal"

export default TodoLists = ({list}) => {
    const CompletedCount = list.todo.filter(todo => todo.completed).length;
    const RemainingCount = list.todo.length - CompletedCount;

    const [listVisible, setListVisible] = useState(false);

  const toggleListModal = () => {
    setListVisible(true);
  };

  const closeModal = () => {
    setListVisible(false);
  };

  return (
    <View>
    <Modal animationType="slide"
    visible={listVisible}
    onRequestClose={() => toggleListModal()}>
        <TodoModal list={list} 
        closeModal={() => closeModal()} 
        updateList={() => updateList()}/>
    </Modal>
    
    <TouchableOpacity style={[styles.listContainer, {backgroundColor: list.color }]} onPress={() => toggleListModal()}>
      <Text style={styles.listTitle} numberOfLines={1}>
          {list.name}
          </Text>
          <View>
              <View style={{alignItems: 'center'}}>
                  <Text style={styles.count}>{RemainingCount}</Text>
                  <Text style={styles.subtitle}>Remaining</Text>
              </View>

              <View style={{alignItems: 'center'}}>
                  <Text style={styles.count}>{CompletedCount}</Text>
                  <Text style={styles.subtitle}>Completed</Text>
              </View>
          </View>
    </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    listTitle: {
        fontSize: 25,
        fontWeight: '800',
        color: color.white,
        marginBottom: 18
    },
    count: {
        fontSize: 20,
        fontWeight: '500',
        color: color.white,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '500',
        color: color.white,
    }
})