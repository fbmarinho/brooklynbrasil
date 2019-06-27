import React from "react";
import { ActivityIndicator, View } from "react-native";
import Colors from "../styles/theme";
import AppStyles from "../styles/AppStyles";

export default class ActivityOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.show ? (
      <ActivityIndicator
        style={AppStyles.activity}
        hidesWhenStopped={true}
        color={Colors.detailColor}
        size="large"
      />
    ) : null;
  }
}
