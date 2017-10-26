import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export default class BodyText extends React.Component {
  render () {
    return (
      <Text style={styles.text}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: Colors.offBlack,
    fontSize: 16
  }
})
