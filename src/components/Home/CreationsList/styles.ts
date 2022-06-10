import { StyleSheet } from "react-native";
import { screenWidth } from "../../../utils/dimesions";

export const styles = StyleSheet.create({
  creationsListHeader: {
    marginTop: 16,
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "TT Commons",
    color: "#000",
  },
  creationsList: {
    marginTop: 16,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  creationListCard: {
    marginBottom: 24,
  },
  emptyItem: {
    width: 0.44 * screenWidth,
    height: 0,
  },
});
