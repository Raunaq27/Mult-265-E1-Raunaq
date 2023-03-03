import React from 'react';

import propTypes from 'prop-types';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class RandomNumber extends React.Component {
  static propTypes = {
    id: propTypes.number.isRequired,
    number: propTypes.number.isRequired,
    isSelected: propTypes.bool.isRequired,
    onPress: propTypes.func.isRequired,
  };
  handlePress = () => {
    if (this.props.isSelected) {
      return;
    }
    this.props.onPress(this.props.id);
  };

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
