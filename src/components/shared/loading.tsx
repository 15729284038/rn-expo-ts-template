import { ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
  return <ActivityIndicator style={styles.loading}></ActivityIndicator>;
}
const styles = StyleSheet.create({
  loading: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
