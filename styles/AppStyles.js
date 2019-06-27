import Theme from "./theme";
import { StyleSheet, Dimensions } from "react-native";

var { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.secondaryColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 40
  },
  activity: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: "black",
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center"
  },
  stickyBotton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: Theme.secondaryText
  },
  title: {
    color: Theme.primaryText,
    fontSize: 18,
    padding: 10,
    textAlign: "center"
  },
  commonText: {
    color: Theme.secondaryText,
    fontSize: 14,
    padding: 10,
    textAlign: "center"
  },
  drawerButton: {
    color: Theme.primaryText,
    padding: 10,
    textAlign: "center"
  },
  header: {
    backgroundColor: Theme.lighterSecondaryColor
  },
  headerTitle: {
    color: Theme.primaryText
  },
  tabBar: {
    backgroundColor: Theme.lighterSecondaryColor,
    padding: 10,
    height: 60
  },
  input: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    borderColor: Theme.secondaryText,
    width: 0.8 * width,
    height: 40,
    textAlign: "center",
    color: Theme.primaryText,
    margin: 5
  },
  validInput: {
    borderColor: Theme.valid
  },
  invalidInput: {
    borderColor: Theme.invalid
  },
  btnPrimary: {
    borderRadius: 20,
    padding: 10,
    borderColor: Theme.secondaryText,
    width: 0.8 * width,
    height: 40,
    textAlign: "center",
    backgroundColor: Theme.primaryText,
    margin: 5
  },
  btnSecondary: {
    borderRadius: 20,
    padding: 10,
    borderColor: Theme.secondaryText,
    backgroundColor: Theme.lighterSecondaryColor,
    color: Theme.detailColor,
    width: 0.8 * width,
    height: 40,
    textAlign: "center",
    margin: 5
  },
  btnDisabled: {
    borderRadius: 20,
    padding: 10,
    borderColor: Theme.secondaryText,
    backgroundColor: Theme.lighterSecondaryColor,
    color: Theme.secondaryColor,
    width: 0.8 * width,
    height: 40,
    textAlign: "center",
    margin: 5
  }
});
