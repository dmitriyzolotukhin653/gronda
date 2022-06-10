import * as React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import { useCreationCard } from "./hook";

export type CreationCardProps = {
  imageURL: string;
  title: string;
  cardWidth?: number;
};

const CreationCard: React.FC<CreationCardProps> = ({
  imageURL,
  title,
  cardWidth = 0.44,
}) => {
  const { width } = useCreationCard({ cardWidth });

  return (
    <View style={[styles.cardContainer, { width }]}>
      <Image style={[styles.cardImage, { width }]} source={{ uri: imageURL }} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

export default CreationCard;
