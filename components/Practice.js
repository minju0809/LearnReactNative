import React, {useState} from 'react';
import Greeting from './Greeting';
import Box from './Box';
import Counter from './Counter';
import { Button } from 'react-native';

const Practice = () => {
  const name = 'JSX';
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  // toggle button 만들기
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Greeting name={name} />
      {/* props의 이름만 적어주면 이 값을 true로 설정함 */}
      <Box rounded size="large" color="blue" />
      <Button title="toggle" onPress={onPress} />
      {visible ? <Box rounded={true} size="medium" color="yellow" /> : null}
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </>
  );
};

export default Practice;
