/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import DateHead from './components/DateHead';
import Practice from './pages/Practice';
import TodoList from './pages/TodoList';

const App = () => {
  const [page, setPage] = useState(0);
  const today = new Date();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.block} edges={['bottom']}>
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
        {/* <Header /> */}
        <DateHead date={today} />
        {page === 0 && <Practice />}
        {page === 1 && <TodoList />}
        <Button title="Practice" onPress={() => setPage(0)}></Button>
        <Button title="TodoList" onPress={() => setPage(1)}></Button>
        {/* </ScrollView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;
