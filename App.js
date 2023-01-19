import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import Practice from './screens/Practice';
import TodoList from './screens/TodoList';
import HeaderlessScreen from './screens/HeaderlessScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [page, setPage] = useState(0);
  const today = new Date();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <SafeAreaView> */}
          <Stack.Navigator
            initialRouteName="Home"
            // screenOptions={{headerShown: false}} 적용하려면 SafeAreaView가 필요한데, 적용하면 화면이 보이지 않음
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: '홈',
                // Header 블록 스타일
                headerStyle: {backgroundColor: '#26b6f6'},
                // Header 텍스트, 버튼들 색상
                headerTintColor: '#ffffff',
                // 타이틀 텍스트의 스타일
                headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
              }}></Stack.Screen>
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={({route}) => ({
                headerBackVisible: false,
                headerLeft: ({onPress}) => (
                  <TouchableOpacity onPress={onPress}>
                    <Text>Left</Text>
                  </TouchableOpacity>
                ),
                headerTitle: ({children}) => (
                  <View>
                    <Text>{children}</Text>
                  </View>
                ),
                headerRight: () => (
                  <View>
                    <Text>Right</Text>
                  </View>
                ),
              })}></Stack.Screen>
            <Stack.Screen
              name="Headerless"
              component={HeaderlessScreen}
              options={{headerShown: false}}
            />
            {/* <StatusBar barStyle="light-content" /> */}
            {/* <SafeAreaView style={styles.block} edges={['bottom']}> */}
            {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
            {/* <DateHead date={today} /> */}
            {/* {page === 0 && <HomeScreen />}
            {page === 1 && <Practice />}
          {page === 2 && <TodoList />} */}
            {/* <Button title="HomeScreen" onPress={() => setPage(0)}></Button>
            <Button title="Practice" onPress={() => setPage(1)}></Button>
          <Button title="TodoList" onPress={() => setPage(2)}></Button> */}
            {/* </ScrollView> */}
            {/* </SafeAreaView> */}
          </Stack.Navigator>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;
