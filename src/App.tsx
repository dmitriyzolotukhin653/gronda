import * as React from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { creationsListSelector } from "../shared/redux/selectors/creations";
import { getCreationsList } from "../shared/redux/slices/creations";
import { AppDispatch } from "../shared/redux";

const App: React.FC = () => {
  const creationsList = useSelector(creationsListSelector);

  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getCreationsList());
  }, [dispatch]);

  return (
    <View>
      <Text>Creations count: {creationsList.length}</Text>
    </View>
  );
};

export default App;
