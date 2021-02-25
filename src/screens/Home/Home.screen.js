import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Proptypes from 'prop-types';
import uuid from 'uuid/v1';
import { connect } from 'react-redux';
import {
  fetchTodoItems,
  deleteTodoItems,
  deleteTodoItem,
  toggleTodoItem,
  addTodoItem
} from '../../stores/actions/todo.action';

import { Button, List, Input, SubTitle } from '../../components';
import { lighterWhite } from '../../utils/color.util';
import styles from './Home.style';

const Home = ({
  todoItems,
  fetchTodo,
  addTodo,
  deleteAllTodo,
  deleteTodo,
  toggleTodo
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  const onDoneAddItem = () => {
    if (inputValue !== '') {
      const id = uuid();
      const newItemObject = { id, text: inputValue, isCompleted: false };
      addTodo(newItemObject);
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <View style={styles.inputContainer}>
          <SubTitle subtitle={"What's Next?"} />
          <Input
            inputValue={inputValue}
            onChangeText={setInputValue}
            onDoneAddItem={onDoneAddItem}
          />
        </View>
        <View style={styles.list}>
          <View style={styles.column}>
            <SubTitle subtitle={'Recent Notes'} />
            <View style={styles.deleteAllButton}>
              <Button
                onPress={() => deleteAllTodo()}
                icon={{
                  name: 'trash-outline',
                  color: lighterWhite,
                  size: 24
                }}
              />
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            {todoItems.reverse().map(item => (
              <List
                key={item.id}
                {...item}
                deleteItem={() => deleteTodo(item.id)}
                toggleItem={() => toggleTodo(item.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

Home.defaultProps = {
  todoItems: []
};

Home.propTypes = {
  todoItems: Proptypes.array.isRequired
};

export const mapStateToProps = ({ todo }) => {
  return {
    todoItems: todo.items
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchTodo: () => dispatch(fetchTodoItems()),
  addTodo: item => dispatch(addTodoItem(item)),
  toggleTodo: id => dispatch(toggleTodoItem(id)),
  deleteTodo: id => dispatch(deleteTodoItem(id)),
  deleteAllTodo: () => dispatch(deleteTodoItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
