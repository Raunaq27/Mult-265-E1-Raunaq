import React from 'react';

import propTypes from 'prop-types';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class RandomNumber extends React.Component {
  static propTypes = {
    number: propTypes.number.isRequired,
    isSelected: propTypes.bool.isRequired,
  };
  //   handlePress = () => {
  //     console.log(this.props.number);
  //   };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isSelected && styles.selected]}>
          {this.props.number}
        </Text>
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
  selected: {
    opacity: 0.3,
  },
});

export default RandomNumber;
