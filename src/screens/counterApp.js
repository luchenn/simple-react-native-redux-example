import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {increment, decrement} from '../actions/counterActions';


class CounterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.counter.count}</Text>
                <TouchableOpacity onPress={this.props.inc} style={styles.button}>
                    <Text>up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.dec} style={styles.button}>
                    <Text>down</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(increment()),
        dec: () => dispatch(decrement())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});