import { Modal, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface Props {
  visible: boolean | undefined;
}

export function Loading({ visible }: Props) {
  if (visible !== undefined) {
    return (
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.container}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      </Modal>
    );
  }
}
