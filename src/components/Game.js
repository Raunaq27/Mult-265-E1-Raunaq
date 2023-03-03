import React from 'react';

import propTypes from 'prop-types';

import {View, StyleSheet, Text} from 'react-native';

class Game extends React.Component {
  static PropTypes = {
    randomCount: propTypes.number.isRequired,
  };

  randomNumbers = Array.from({length: this.props.randomCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  target = this.randomNumbers
    .slice(0, this.props.randomCount - 2)
    .reduce((acc, curr) => acc + curr, 0);
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <Text style={styles.random} key={index}>
              {randomNumber}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#QQQ',
    flex: 1,
    paddingTop: 45,
  },
  target: {
    fontSize: 40,
    backgroundColor: '#DDD',
    margin: 50,
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  random: {
    backgroundColor: '#777',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});

export default Game;
