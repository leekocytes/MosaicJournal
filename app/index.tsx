import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Index() {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>
        MosaicJournal
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.text }]}>
        A minimalistic journaling app
      </Text>

      <View style={styles.themeContainer}>
        <Text style={[styles.themeText, { color: theme.colors.text }]}>
          Current theme: {theme.dark ? "dark" : "light"}
        </Text>
        <Text style={[styles.note, { color: theme.colors.text }]}>
          Your app automatically follows your device theme settings
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  themeContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  themeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  note: {
    fontSize: 14,
    opacity: 0.8,
    textAlign: "center",
  },
});
