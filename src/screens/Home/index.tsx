import * as React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NavigationFunctionComponent } from "react-native-navigation";

import CreationsList from "../../components/Home/CreationsList";
import GrondaLogo from "../../assets/gronda_logo.png";
import MasterClassesSlider from "../../components/Home/MasterClassesSlider";
import { styles } from "./styles";
import {
  useHomeNavigation,
  useHomeScreenStore,
  useSliderParentWidth,
} from "./hooks";

const HomeScreen: NavigationFunctionComponent = ({ componentId }) => {
  const { loading, error, masterClassesList, creationsList } =
    useHomeScreenStore();
  const { handleCreationPress } = useHomeNavigation(componentId);
  const { sliderParentWidth, handleScrollViewLayout } = useSliderParentWidth();

  return (
    <SafeAreaView>
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
            <CreationsList
              creationsList={creationsList}
              onPress={handleCreationPress}
            />
          </ScrollView>
        )}

        {!loading && error && (
          <View>
            <Text>{error}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
