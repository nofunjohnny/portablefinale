import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Text,
  Textarea,
  Item,
  Input,
  Label,
  Button,
  Picker,
  Icon,
  H1
} from "native-base";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Rentals',
  };
  constructor(props) {
    super(props)
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  };
  render() {
    return (
      <Container>
      <H1>Rental Form</H1>
        
        
        <Content>
        
          <Form>
            <Item fixedLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Company</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Picker
              mode="dropdown"
              placeholder="Select your Product"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your Product"
              textStyle={{ color: "#0099ff" }}
              itemStyle={{
                backgroundColor: "#fefefe",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#0099ff' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="KPAC" value="key0" />
              <Picker.Item label="KIB" value="key1" />
              <Picker.Item label="KPO" value="key2" />
              <Picker.Item label="ATTIC MASTER" value="key3" />
              <Picker.Item label="HEAT PUMP" value="key4" />
            </Picker>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Quantity</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Size TONS</Label>
              <Input />
            </Item>
            <Label>Voltage</Label>
            <Picker
              mode="dropdown"
              placeholder="Choose Voltage"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Choose Voltage"
              textStyle={{ color: "#0099ff" }}
              itemStyle={{
                backgroundColor: "#fefefe",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#0099ff' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="115 AMPS" value="key0" />
              <Picker.Item label="230 AMPS" value="key1" />
              <Picker.Item label="460 AMPS" value="key2" />
            </Picker>
            <Label>Usage</Label>
            <Picker
              mode="dropdown"
              placeholder="Select Usage"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select Usage"
              textStyle={{ color: "#0099ff" }}
              itemStyle={{
                backgroundColor: "#fefefe",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#0099ff' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="OFFICE" value="key0" />
              <Picker.Item label="WAREHOUSE" value="key1" />
              <Picker.Item label="IT ROOM" value="key2" />
              <Picker.Item label="OTHER" value="key2" />
            </Picker>
            <Content padder>
              <Textarea rowSpan={5} bordered placeholder="Message" onChange={e => this.setState({ message: e.target.value})} />
            </Content>
            <Button large info>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
