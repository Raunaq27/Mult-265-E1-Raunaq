import React from 'react';

import propTypes from 'prop-types';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class RandomNumber extends React.Component {
  static propTypes = {
    number: propTypes.number.isRequired,
  };
//   handlePress = () => {
//     console.log(this.props.number);
//   };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.random}>{this.props.number} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#777',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});

export default RandomNumber;
