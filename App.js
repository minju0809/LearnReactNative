/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import Greeting from './components/Greeting';
import Box from './components/Box';
import Counter from './components/Counter';

const App = () => {
  const name = 'JSX';
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  // toggle button 만들기
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.full}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <Greeting name={name} />
        {/* props의 이름만 적어주면 이 값을 true로 설정함 */}
        <Box rounded size="large" color="blue" />
        <Button title="toggle" onPress={onPress} />
        {visible ? <Box rounded={true} size="medium" color="yellow" /> : null}
        <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#809090',
  },
});

export default App;
