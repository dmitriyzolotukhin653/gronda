import * as React from "react";
import { Text, ImageBackground } from "react-native";

import { styles } from "./styles";

export type MasterClassProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
  imageBackgroundStyles?: Record<string, unknown>;
};

const MasterClass: React.FC<MasterClassProps> = ({
  imageUrl,
  title,
  subtitle,
  imageBackgroundStyles,
}) => {
  return (
    <ImageBackground
      style={[styles.masterClassBanner, imageBackgroundStyles]}
      resizeMode={"cover"}
      imageStyle={styles.masterClassBanner}
      source={{
        uri: imageUrl,
      }}
    >
      <Text style={[styles.text, styles.newText]}>New</Text>
      <Text style={[styles.text, styles.titleText]}>{title}</Text>
      <Text style={[styles.text, styles.subtitleText]}>{subtitle}</Text>
    </ImageBackground>
  );
};

export default MasterClass;
