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
    <View style={styles.block}>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today} />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'red',
  },
  avoid: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default TodoList;
