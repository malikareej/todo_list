import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default TodoLists = ({list}) => {
    const CompletedCount = list.todo.filter(todo => todo.completed).length;
    const RemainingCount = list.todo.length - CompletedCount;

  return (
    <View style={[styles.listContainer, {backgroundColor: list.color }]}>
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