import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#222",
  },

  text: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
  },

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    paddingHorizontal: 40,
  },

  movieItem: {
    alignItems: "center",
    marginBottom: 30,
  },

  movieAvatar: {
    width: 350,
    height: 400,
    marginBottom: 10,
  },

  movieTitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: "#fff",
  },
});
