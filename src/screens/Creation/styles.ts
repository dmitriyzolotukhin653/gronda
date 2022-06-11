import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  creationScreenContainer: {
    backgroundColor: "#075669",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    ...(Platform.OS === "android" && { fontFamily: "TT Commons" }),
  },
  visitsNumText: {
    fontSize: 60,
  },
  visitsText: {
    fontSize: 24,
  },
  backButtonContainer: {
    position: "absolute",
    left: 16,
    top: 16,
  },
});
