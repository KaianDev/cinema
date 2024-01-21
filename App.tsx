import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Movie } from "./types/Movie";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const req = await fetch("https://api.b7web.com.br/cinema/");
      const json = (await req.json()) as Movie[];
      if (json) {
        setMovies(json);
      }
      setLoading(false);
    };

    loadMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.text}>Carregando...</Text>
        </View>
      )}
      {!loading && movies.length > 0 && (
        <>
          <Text style={styles.text}>
            Quantidade de filmes em catálogo: {movies.length}{" "}
          </Text>
          <FlatList
            
            style={styles.list}
            data={movies}
            keyExtractor={(item) => item.titulo}
            renderItem={({ item }) => (
              <View style={styles.movieItem}>
                <Image
                  style={styles.movieAvatar}
                  source={{ uri: item.avatar }}
                  resizeMode="contain"
                />
                <Text style={styles.movieTitle}>{item.titulo}</Text>
              </View>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default App;
