import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { useCreationCard } from "./hook";
import { ICreation } from "../../../../shared/api/types";

export type CreationCardProps = {
  creation: ICreation;
  cardWidth?: number;
  onPress?: (id: number) => void;
};

const CreationCard: React.FC<CreationCardProps> = ({
  creation,
  cardWidth = 0.44,
  onPress,
}) => {
  const { width, handleCreationPress } = useCreationCard({
    creation,
    cardWidth,
    onPress,
  });

  return (
    <TouchableOpacity onPress={handleCreationPress}>
      <View style={[styles.cardContainer, { width }]}>
        <Image
          style={[styles.cardImage, { width }]}
          source={{ uri: creation.img_url }}
        />
        <Text style={styles.cardText}>{creation.title || "Awesome dish"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CreationCard;
