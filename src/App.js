
import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./screens/SideBar";
import Courses from "./screens/Courses";

import MyCourses from "./screens/MyCourses";
import Unit from "./screens/MyCourses/unit";
import MyClass from "./screens/MyCourses/class";

const Drawer = DrawerNavigator(
  {
    Courses: {screen: Courses},
    MyCourses: {screen: MyCourses}
  },
  {
    initialRouteName: "Courses",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: {screen: Drawer},

    Unit: {screen: Unit},
    MyClass: {screen: MyClass},
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
