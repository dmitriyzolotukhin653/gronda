import * as React from "react";
import { GestureResponderEvent, TouchableOpacity, Image } from "react-native";

import BackButtonImage from "../../../assets/back.png";
import { styles } from "./styles";

export type BackButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <Image source={BackButtonImage} style={styles.backButton} />
    </TouchableOpacity>
  );
};

export default BackButton;
