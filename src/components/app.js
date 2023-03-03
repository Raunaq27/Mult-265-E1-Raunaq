import React from "react";

import { View, Text, StyleSheet } from "react-native"

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TargetSum</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#234',
        flex: 1,
    },
});

export default App;