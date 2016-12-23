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
  SideMenu, List, ListItem
} from 'react-native-elements';

import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Icon
} from 'native-base';

import Drawer from 'react-native-drawer';

import LeftMenu from 'react-native-side-menu';
import RightMenu from 'react-native-side-menu';

export default class ReactNativeElementsPrototypeLinux extends Component {

  constructor () {
    super()
    this.state = { isLeftMenuOpen: false, isRightMenuOpen: false }
  }

  componentDidMount() {
  }

  openLeftMenu() {
    this.setState({ isLeftMenuOpen: true });
  }

  openRightMenu() {
    this.setState({ isRightMenuOpen: true });
  }

  render () {
    return (
      /*
      <SideMenu
        MenuComponent={MenuComponent}
        toggled={this.state.toggled}>
      <Drawer
        ref={ ref => this._drawer = ref }
        type="static"
        tapToClose={true}
        content={MenuComponent}
        openDrawerOffset={100}
        styles={drawerStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
        >
        */
      <RightMenu menuPosition="right" menu={<Text>{'Nothing !'}</Text>} isOpen={this.state.isRightMenuOpen}>
      <LeftMenu menu={MenuComponent} isOpen={this.state.isLeftMenuOpen}>
        <Container>
          <Header>
            <Button transparent onPress={ () => this.openLeftMenu() }>
              <Icon name='ios-menu' />
            </Button>

            <Title style={{
              alignSelf: 'center'
            }}>
              <Text>Header</Text>
            </Title>

            <Button transparent onPress={ () => this.openRightMenu() }>
              <Icon name='ios-menu' />
            </Button>
          </Header>

          <Content style={{ backgroundColor: '#fff', flex: 1 }}>
          </Content>

          <Footer>
            <FooterTab>
              <Button transparent>
                <Icon name='ios-call' />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </LeftMenu>
      </RightMenu>
      /*
      </Drawer>
      </SideMenu>
      */
    )
  }
}

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
);

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 0},
}

AppRegistry.registerComponent('ReactNativeElementsPrototypeLinux', () => ReactNativeElementsPrototypeLinux);
