import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  screenContainerLogoWrapper: {
    height: 60,
  },
  screenContainerLogo: {
    flex: 1,
    height: 30,
    marginTop: 6,
    marginBottom: 10,
  },
  screenContainerContentWrapper: { paddingLeft: 16, paddingRight: 16 },
});
