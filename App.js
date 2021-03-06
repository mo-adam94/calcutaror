import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-elements';
var RNFS = require('react-native-fs');
var path = RNFS.DocumentDirectoryPath + '/test.txt';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstValue: '',
      secondValue: '',
      sum: '',
      sub: '',
      div: '',
      mul: '',
      isLoading: false,
    };
  }



  calculateSum = () => {
    const {firstValue, secondValue} = this.state;
    const sum = Number(firstValue) + Number(secondValue);
    this.setState({
      sum,
    });
    RNFS.writeFile(path, sum, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });

      
  };

  calculateSub = () => {
    const {firstValue, secondValue} = this.state;
    const sub = Number(firstValue) - Number(secondValue);
    this.setState({
      sub,
    });
    RNFS.writeFile(path, sub, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  calculateMul = () => {
    const {firstValue, secondValue} = this.state;
    const mul = Number(firstValue) * Number(secondValue);
    this.setState({
      mul,
    });
    RNFS.writeFile(path, mul, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  calculateDiv = () => {
    const {firstValue, secondValue} = this.state;
    const div = Number(firstValue) / Number(secondValue);
    this.setState({
      div,
    });
    RNFS.writeFile(path, div, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    const {isLoading} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}> Calculate </Text>
          <View style={styles.section}>
            <MaterialIcons name="label" size={20} />
            <TextInput
              placeholder="First Number"
              style={styles.textInput}
              keyboardType="number-pad"
              value={this.state.firstValue}
              onChangeText={firstValue => this.setState({firstValue})}
            />
          </View>
          <View style={styles.section}>
            <MaterialIcons name="label" size={20} />
            <TextInput
              placeholder="Second Number"
              style={styles.textInput}
              keyboardType="number-pad"
              value={this.state.secondValue}
              onChangeText={secondValue => this.setState({secondValue})}
            />
          </View>

          <Divider
            style={{
              paddingVertical: 1,
              backgroundColor: 'gray',
              marginTop: 10,
              height: 1,
            }}
          />

          <Text style={styles.result}>
            Result: {` ${this.state.sum}`} {` ${this.state.sub}`}
            {` ${this.state.mul}`} {` ${this.state.div}`}
          </Text>

          <TouchableOpacity style={styles.Sum} onPress={this.calculateSum}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.text}>Sum</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.Sum} onPress={this.calculateSub}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.text}>Subtract</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.Sum} onPress={this.calculateMul}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.text}>Multiply</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.Sum} onPress={this.calculateDiv}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.text}>Dividing</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  title: {
    color: '#3465d9',
    fontWeight: 'bold',
    fontSize: 30,
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Sum: {
    width: '100%',
    height: 50,
    backgroundColor: '#3465d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 50,
  },
  result: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#000000'
  },
});
