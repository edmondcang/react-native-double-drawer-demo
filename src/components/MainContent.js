import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Container, Header, Title, Content, Footer, FooterTab, Button, Icon
} from 'native-base';

export default class MainContent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={ this.props.openLeftMenu }>
            <Icon name='ios-menu' />
          </Button>

          <Title style={{
            alignSelf: 'center'
          }}>
            <Text>Header</Text>
          </Title>

          <Button transparent onPress={ this.props.openRightMenu }>
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
}
