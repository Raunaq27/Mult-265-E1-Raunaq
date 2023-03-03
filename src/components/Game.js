import React from 'react';

import propTypes from 'prop-types';

import {View, StyleSheet, Text} from 'react-native';

import RandomNumber from './RandomNumber';

class Game extends React.Component {
  static propTypes = {
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
      return 'WON';
    }
    if (sumSelected > this.target) {
      return 'LOST';
    }
  };

  render() {
    const gameStatus = this.gameStatus();
    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
          {this.target}
        </Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              number={randomNumber}
              isSelected={
                this.isNumberSelected(index) || gameStatus !== 'playing'
              }
              onPress={this.selectNumber}
            />

            // <Text style={styles.random} key={index}>
            //   {randomNumber}
            // </Text>
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

  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

export default Game;
