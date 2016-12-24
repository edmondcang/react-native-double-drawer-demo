import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
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

import RightMenu from 'react-native-side-menu';

import MainContent from './components/MainContent';

export default class App extends Component {

  constructor () {
    super()
    this.state = { isLeftMenuOpen: false, isRightMenuOpen: false }
  }

  componentDidMount() {
  }

  openLeftMenu() {
    this.leftDrawer.openDrawer();
  }

  openRightMenu() {
    this.setState({ isRightMenuOpen: true });
  }

  render () {
    return (
      <RightMenu
        menuPosition="right"
        menu={RightMenuContent}
        isOpen={this.state.isRightMenuOpen}
        >
        <DrawerLayoutAndroid
          ref={ ref => this.leftDrawer = ref }
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => MenuComponent}
          >
          <MainContent
            openLeftMenu={this.openLeftMenu.bind(this)}
            openRightMenu={this.openRightMenu.bind(this)}
            />
        </DrawerLayoutAndroid>
      </RightMenu>
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
          onPress={() => alert(item.name)}
          avatar={{uri:item.avatar_url}}
          key={i}
          title={item.name}
          subtitle={item.subtitle} />
      ))
    }
    </List>
  </View>
);

const RightMenuContent = (
  <Container>
    <Content style={{ backgroundColor: '#fff', flex: 1 }}>
      <Text>{'Nothing !'}</Text>
    </Content>
  </Container>
);
