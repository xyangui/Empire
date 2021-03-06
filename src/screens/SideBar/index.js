
import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

import MyCourseCard from "../MyCourses/index";

/**
 * 更换图标网址
 * https://ionicframework.com/docs/ionicons/
 */

//const drawerCover = require("../../../assets/drawer-cover.jpeg");
//const drawerImage = require("../../../assets/logo-kitchen-sink.png");


const datas = [
  {
    name: "Courses",
    route: "Courses",
    icon: "logo-buffer",
    bg: "#C5F442"
  },
  {
      name: "My Courses",
      route: "MyCourses",
      icon: "ios-book-outline",
      bg: "#13b9f4",
      types: "4"
  },

  {
    name: "My Profile",
    route: "Header",
    icon: "ios-person",
    bg: "#477EEA",
    types: "8"
  },
  {
    name: "Login",
    route: "Footer",
    icon: "ios-log-in",
    bg: "#DA4437"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          {/*<Image source={drawerCover} style={styles.drawerCover} />*/}
          {/*<Image square style={styles.drawerImage} source={drawerImage} />*/}

          <Image source={{uri: 'cover_logo'}} style={styles.drawerCover} />

          <Image source={{uri: 'empire_logo'}} square style={styles.drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} News`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
