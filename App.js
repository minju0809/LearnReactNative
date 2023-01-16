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
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Practice from './components/Practice';
import TodoList from './components/TodoList';

const App = () => {
  const [page, setPage] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <StatusBar barStyle="light-content" />
          {/* <Header /> */}
          <Button title="Practice" onPress={() => setPage(0)}></Button>
          <Button title="TodoList" onPress={() => setPage(1)}></Button>
          {page === 0 && <Practice />}
          {page === 1 && <TodoList />}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#26a69a',
  },
});

export default App;
