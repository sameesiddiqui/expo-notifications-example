import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class CodeScreen extends React.Component {
  static navigationOptions = {
    title: 'Code',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Coming soon</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
