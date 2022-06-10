import * as React from "react";
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";

import CreationsList from "../../components/Home/CreationsList";
import GrondaLogo from "../../assets/gronda_logo.png";
import MasterClassesSlider from "../../components/Home/MasterClassesSlider";
import { styles } from "./styles";
import { useHomeScreen } from "./hook";

const HomeScreen: React.FC = () => {
  const {
    creationsList,
    masterClassesList,
    error,
    loading,
    sliderParentWidth,
    handleScrollViewLayout,
  } = useHomeScreen();

  return (
    <View style={styles.screenContainer}>
      {loading && <ActivityIndicator size="large" />}

      {!loading && (
        <View style={styles.screenContainerLogoWrapper}>
          <Image
            source={GrondaLogo}
            resizeMode={"contain"}
            style={styles.screenContainerLogo}
          />
        </View>
      )}

      {!(loading || error) && (
        <ScrollView
          onLayout={handleScrollViewLayout}
          style={styles.screenContainerContentWrapper}
        >
          <MasterClassesSlider
            sliderParentWidth={sliderParentWidth}
            masterClassesList={masterClassesList}
          />
          <CreationsList creationsList={creationsList} />
        </ScrollView>
      )}

      {!loading && error && (
        <View>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
