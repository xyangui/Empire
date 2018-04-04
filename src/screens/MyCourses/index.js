/**
 * 我的课程页面
 */
import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import styles from "./styles";

const cardImage = require("./mycourse_cover.png");

class MyCourses extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>My Courses</Title>
          </Body>
          <Right />
        </Header>


        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:'logo_cclt'}} />
                <Body>
                <Text>CCLT</Text>
                <Text note>Empire</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                  style={{
                    resizeMode: "cover",
                    width: null,
                    height: 200,
                    flex: 1
                  }}
                  source={cardImage}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="ios-photos" />
                  <Text>Unit</Text>
                </Button>
              </Left>
              <Body>
              <Button transparent>
                <Icon active name="ios-school" />
                <Text>Class</Text>
              </Button>
              </Body>
              <Right>
                {/*<Text>11h ago</Text>*/}
              </Right>
            </CardItem>
          </Card>
        </Content>


      </Container>
    );
  }
}

export default MyCourses;
