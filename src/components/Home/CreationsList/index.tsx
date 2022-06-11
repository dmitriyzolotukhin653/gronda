import * as React from "react";
import { View, Text } from "react-native";

import CreationCard from "../CreationCard";
import { ICreation } from "../../../../shared/api/types";
import { styles } from "./styles";

export type CreationsListProps = {
  creationsList: Array<ICreation>;
  onPress?: (id: number) => void;
};

const CreationsList: React.FC<CreationsListProps> = ({
  creationsList,
  onPress,
}) => {
  return (
    <>
      <Text style={styles.creationsListHeader}>Creation for you</Text>
      <View style={styles.creationsList}>
        {creationsList.map((creation) => (
          <View style={[styles.creationListCard]} key={creation.id}>
            <CreationCard
              cardWidth={0.44}
              creation={creation}
              onPress={onPress}
            />
          </View>
        ))}
        <View style={styles.emptyItem} />
      </View>
    </>
  );
};

export default CreationsList;
