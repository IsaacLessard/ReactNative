import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Add a meal"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(text) {
    this.setState({text})
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Insert ingredients here, seperated with commas!"
          onChangeText={(text) => this.handleInput(text)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
