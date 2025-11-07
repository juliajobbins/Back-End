
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";

type Produto = {
  id: number;
  titulo: string;
  autor: string;
  preco: number | string | null;
  imagem_url?: string;
  descricao?: string;
};

export default function App(): JSX.Element {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState("");

  const API_URL = "http://10.210.87.121:3002/produtos/estoque";

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
        const data = await res.json();
        setProdutos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        Alert.alert("Erro", "Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  // Função de filtragem
  const produtosFiltrados = produtos.filter((item) =>
    (item.titulo + item.autor)
      .toLowerCase()
      .includes(pesquisa.toLowerCase().trim())
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#c59a2d" />
        <Text style={styles.loadingText}>Carregando livros...</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Produto }) => {
    const precoNumber =
      typeof item.preco === "number"
        ? item.preco
        : parseFloat(String(item.preco).replace(",", "."));
    const precoFormatado = !isNaN(precoNumber)
      ? `R$ ${precoNumber.toFixed(2)}`
      : "Preço indisponível";

    return (
      <View style={styles.card}>
        {item.imagem_url ? (
          <Image source={{ uri: item.imagem_url }} style={styles.imagem} />
        ) : (
          <View style={styles.semImagem}>
            <Text style={styles.semImagemTexto}>Sem imagem</Text>
          </View>
        )}

        <View style={styles.infoContainer}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.autor}>{item.autor}</Text>
          <Text style={styles.descricao}>
            {item.descricao || "Sinopse não disponível."}
          </Text>
          <Text style={styles.preco}>{precoFormatado}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeLoja}>Libretto</Text>
        <Text style={styles.slogan}>Cada livro, uma ópera da alma</Text>
      </View>
      <View style={styles.bordaPesquisar}>
        <Text style={styles.textoPesquisar}>Pesquisar:</Text>
        <TextInput
          style={styles.inputPesquisar}
          value={pesquisa}
          onChangeText={setPesquisa}
          placeholder="Digite o nome ou autor..."
          placeholderTextColor="#b9a98f"
        />
      </View>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.nenhumResultado}>Nenhum livro encontrado.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b3a2f",
    paddingHorizontal: 15,
  },
  lista: {
    paddingBottom: 30,
  },
  header: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  nomeLoja: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#e8e1d1",
    fontFamily: "serif",
  },
  slogan: {
    fontSize: 14,
    color: "#c59a2d",
    marginBottom: 10,
  },
  tituloPrincipal: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e8e1d1",
    textAlign: "center",
    marginBottom: 15,
  },
  bordaPesquisar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8e1d1",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  textoPesquisar: {
    color: "#4b3a2f",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  inputPesquisar: {
    flex: 1,
    backgroundColor: "#f5f1e8",
    padding: 6,
    borderRadius: 8,
    color: "#2f5d34",
  },
  card: {
    backgroundColor: "#e8e1d1",
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  imagem: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  semImagem: {
    width: 100,
    height: 150,
    backgroundColor: "#c5b59a",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  semImagemTexto: {
    color: "#4b3a2f",
    fontSize: 12,
  },
  infoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2f5d34",
    marginBottom: 5,
  },
  autor: {
    fontSize: 14,
    color: "#4b3a2f",
    marginBottom: 10,
    fontStyle: "italic",
  },
  descricao: {
    fontSize: 13,
    color: "#3b2f29",
    marginBottom: 10,
  },
  preco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c59a2d",
  },
  nenhumResultado: {
    color: "#e8e1d1",
    fontSize: 16,
    textAlign: "center",
    marginTop: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4b3a2f",
  },
  loadingText: {
    marginTop: 10,
    color: "#e8e1d1",
    fontSize: 16,
  },
});
