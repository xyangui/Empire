import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

const sankhadeep = require("../../../assets/contacts/sankhadeep.png");
const supriya = require("../../../assets/contacts/supriya.png");
const himanshu = require("../../../assets/contacts/himanshu.png");
const shweta = require("../../../assets/contacts/shweta.png");
const shruti = require("../../../assets/contacts/shruti.png");
const shivraj = require("../../../assets/contacts/shivraj.jpg");
const datas = [
  // {
  //   img: sankhadeep,
  //   text: "Sankhadeep",
  //   note: "Its time to build a difference . ."
  // },
  // {
  //   img: supriya,
  //   text: "Supriya",
  //   note: "One needs courage to be happy and smiling all time . . "
  // },
  // {
  //   img: shivraj,
  //   text: "Shivraj",
  //   note: "Time changes everything . ."
  // },
  {
    img: shruti,
    text: "NATTI",
    note: "This is NATTI!"
  },
  {
    img: himanshu,
    text: "CCLT",
    note: "This is CCLT!"
  },
  {
    img: shweta,
    text: "PTE",
    note: "This is PTE!"
  }
];

class Course extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Courses</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>


          <List
              dataArray={datas}
              renderRow={data =>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square size={55} source={data.img} />
                    </Left>
                    <Body>
                    <Text>
                      {data.text}
                    </Text>
                    <Text numberOfLines={1} note>
                      {data.note}
                    </Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>}
          />

          {/*<Text>Nat555tie</Text>*/}
          {/*<Text>CCLT</Text>*/}
          {/*<Text>PTE</Text>*/}
        </Content>

        {/*<Footer>*/}
          {/*<FooterTab>*/}
            {/*<Button active full>*/}
              {/*<Text>Footer</Text>*/}
            {/*</Button>*/}
          {/*</FooterTab>*/}
        {/*</Footer>*/}
      </Container>
    );
  }
}

export default Course;
