import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
  },
  cardImage: {
    borderRadius: 5,
    aspectRatio: 1,
  },
  cardText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 20,
    marginTop: 12,
    ...(Platform.OS === "android" && { fontFamily: "TT Commons" }),
  },
});
