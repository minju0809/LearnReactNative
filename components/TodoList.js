import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import DateHead from './DateHead';
import AddTodo from './AddTodo';
import Empty from './Empty';

const TodoList = () => {
  const today = new Date();
  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'iso' ? 'padding' : undefined}
        behavior={Platform.select({ios: 'padding', android: undefined})}
        style={styles.avoid}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default TodoList;
