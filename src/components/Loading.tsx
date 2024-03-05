import { Modal, View, StyleSheet, ActivityIndicator } from "react-native";

interface Props {
  visible: boolean | undefined;
}

export function Loading({ visible }: Props) {
  if (visible !== undefined) {
    return (
      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(24, 24, 24, 0.8)",
  },
});
