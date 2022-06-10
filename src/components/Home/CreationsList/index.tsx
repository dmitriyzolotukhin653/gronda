import * as React from "react";
import { View, Text } from "react-native";

import CreationCard from "../CreationCard";
import { ICreation } from "../../../../shared/api/types";
import { styles } from "./styles";

export type CreationsListProps = {
  creationsList: Array<ICreation>;
};

const CreationsList: React.FC<CreationsListProps> = ({ creationsList }) => {
  return (
    <>
      <Text style={styles.creationsListHeader}>Creation for you</Text>
      <View style={styles.creationsList}>
        {creationsList.map((creation) => (
          <View style={[styles.creationListCard]} key={creation.id}>
            <CreationCard
              cardWidth={0.44}
              title={creation.title}
              imageURL={creation.img_url}
            />
          </View>
        ))}
        <View style={styles.emptyItem} />
      </View>
    </>
  );
};

export default CreationsList;
