/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Button,
  SideMenu, List, ListItem
} from 'react-native-elements';

export default class ReactNativeElementsPrototype extends Component {

  constructor () {
    super()
    this.state = { toggled: false }
  }

  toggleSideMenu () {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render () {
    const list = [
      { name: 'Amy' },
      { name: 'Tracy' },
      { name: 'Cookie' },
      { name: 'Pantry' },
    ];
    // SideMenu takes a React Native element as a prop for the actual Side Menu
    const MenuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((item, i) => (
            <ListItem
              roundAvatar
              onPress={() => console.log('something')}
              avatar={{uri:item.avatar_url}}
              key={i}
              title={item.name}
              subtitle={item.subtitle} />
          ))
        }
        </List>
      </View>
    )
    return (
      <SideMenu
        MenuComponent={MenuComponent}
        toggled={this.state.toggled}>
        <Text>Hi</Text>
      </SideMenu>
    )
  }
}

AppRegistry.registerComponent('ReactNativeElementsPrototype', () => ReactNativeElementsPrototype);
