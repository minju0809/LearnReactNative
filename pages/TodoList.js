import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import AddTodo from '../components/AddTodo';
import Empty from '../components/Empty';
import {useState, useEffect} from 'react';
import Todo from '../components/Todo';
import todosStorage from '../storages/todosStorages';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  useEffect(() => {
    todosStorage
      .get()
      .then(setTodos)
      .catch(console.error);
  }, []);

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <View style={styles.block}>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <Todo todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    // backgroundColor: 'red',
  },
  avoid: {
    flex: 1,
    // backgroundColor: 'red',
  },
});

export default TodoList;
