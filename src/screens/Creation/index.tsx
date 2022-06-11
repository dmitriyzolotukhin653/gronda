import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationFunctionComponent } from "react-native-navigation";

import BackButton from "../../components/custom/BackButton";
import { styles } from "./styles";
import { useCreationNavigation, useVisitsHandler } from "./hooks";

export type CreationScreenProps = {
  creationId: number;
};

export const CreationScreen: NavigationFunctionComponent<
  CreationScreenProps
> = ({ creationId, componentId }) => {
  const { visits } = useVisitsHandler(creationId);
  const { handleBackButtonPress } = useCreationNavigation(componentId);

  return (
    <SafeAreaView style={{ backgroundColor: "#075669", flex: 1 }}>
      <View style={styles.creationScreenContainer}>
        <View style={styles.backButtonContainer}>
          <BackButton onPress={handleBackButtonPress} />
        </View>
        <Text style={[styles.text, styles.visitsNumText]}>{visits}</Text>
        <Text style={[styles.text, styles.visitsText]}>Visits</Text>
      </View>
    </SafeAreaView>
  );
};

export default CreationScreen;
