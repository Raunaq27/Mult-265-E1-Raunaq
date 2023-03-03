import React from 'react';

import propTypes from 'prop-types';

import {View, StyleSheet, Text} from 'react-native';

import RandomNumber from './RandomNumber';

class Game extends React.Component {
  static PropTypes = {
    randomCount: propTypes.number.isRequired,
  };

  state = {
    selectedIds: [],
  };

  randomNumbers = Array.from({length: this.props.randomCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  target = this.randomNumbers
    .slice(0, this.props.randomCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  isNumberSelected = noIndex => {
    return this.state.selectedIds.indexOf(noIndex) >= 0;
  };
  selectNumber = numberIndex => {
    this.setState(prevState => {
      return {selectedIds: [...prevState.selectedIds, numberIndex]};
    });
  };

  gameStatus = numberIndex => {
    const sumSelected = this.state.selectedIds.reduce((acc, curr) => {
      return acc + this.randomNumbers[curr];
    }, 0);
    if (sumSelected < this.target) {
      return 'playing';
    }
    if (sumSelected === this.target) {
      return 'W';
    }
    if (sumSelected > this.target) {
      return 'L';
    }
  };
  render() {
    const gameStatus_1 = this.gameStatus();
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.target}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              number={randomNumber}
              isSelected={this.isNumberSelected(index)}
              onPress={this.selectNumber}
            />

            // <Text style={styles.random} key={index}>
            //   {randomNumber}
            // </Text>
          ))}
        </View>
        <Text style={styles.target}>{gameStatus_1}</Text>
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
