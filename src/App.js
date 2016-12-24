import React, { Component } from 'react';
import {
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

// import MainContent from './components/MainContent';

const App = () => {
  return (
    <RightMenu menuPosition="right" menu={RightMenuContent} isOpen={false}>
      <LeftMenu menu={LeftMenuContent} isOpen={false}>
        <MainContent />
      </LeftMenu>
    </RightMenu>
  );
};

const openLeftMenu = () => LeftMenu.isOpen = true;

const MainContent = () => {
  return (
    <Container>
      <Header>
        <Button transparent onPress={openLeftMenu}>
          <Icon name='ios-menu' />
        </Button>

        <Title style={{
          alignSelf: 'center'
        }}>
          <Text>Header</Text>
        </Title>

        <Button transparent>
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
  );
}

const list = [
  { name: 'Amy' },
  { name: 'Tracy' },
  { name: 'Cookie' },
  { name: 'Pantry' },
];

// SideMenu takes a React Native element as a prop for the actual Side Menu
const LeftMenuContent = (
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

export default App;
