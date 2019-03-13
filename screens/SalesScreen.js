import React, { Component } from "react";
import {
  Container,
  Header,
  Textarea,
  Content,
  Form,
  Text,
  Item,
  Input,
  Label,
  Button,
  Picker,
  Icon,
  H1
} from "native-base";
import axios from 'axios';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Sales"
  };
  
  state = {
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    message: '',
    _sent: false,
    get sent() {
      return this._sent;
    },
    set sent(value) {
      this._sent = value;
    },
    buttonText: 'Submit',
  }

  render() {
    return (
      <Container>
        <H1>Sale Form</H1>

        <Content>
          <Form onSubmit={ (e) => this.formSubmit(e)}>
            <Item fixedLabel>
              <Label>Name</Label>
              <Input onChange={e => this.setState({ name: e.target.value})} />
            </Item>
            <Item fixedLabel>
              <Label>Company</Label>
              <Input onChange={e => this.setState({ company: e.target.value})} />
            </Item>
            <Item fixedLabel>
              <Label>Phone</Label>
              <Input onChange={e => this.setState({ name: e.target.value})} />
            </Item>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input onChange={e => this.setState({ email: e.target.value})} />
            </Item>
            <Item fixedLabel>
              <Picker
                mode="dropdown"
                placeholder="Select your Product"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your Product"
                textStyle={{ color: "#5cb85c" }}
                itemStyle={{
                  backgroundColor: "#fefefe",
                  marginLeft: 0,
                  paddingLeft: 10
                }}
                itemTextStyle={{ color: "#788ad2" }}
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="PHP" value="key0" />
                <Picker.Item label="KCA" value="key1" />
                <Picker.Item label="KCW" value="key2" />
                <Picker.Item label="ATTIC MASTER" value="key3" />
                <Picker.Item label="BIOKOOL" value="key4" />
                <Picker.Item label="KIB" value="key5" />
                <Picker.Item label="KPAC" value="key6" />
                <Picker.Item label="KPo" value="key7" />
              </Picker>
              <Input onChange={e => this.setState({ product: e.target.value})} />
            </Item>

            <Content padder><Text>Submit</Text>
              <Textarea rowSpan={5} bordered placeholder="Message" onChange={e => this.setState({ message: e.target.value})} />
            </Content>
            <Button large success type="submit">
            { this.state.buttonText }
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
