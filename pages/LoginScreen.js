import { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button, Appbar } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (nome && senha) {
      navigation.navigate("Cliente");
    } else {
      alert("Por favor, Preencha todo os campos");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Login de Usuário" />
      </Appbar.Header>
        
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text style={{ marginBottom: 20, fontSize: 20 }}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          style={{ width: "100%", marginBottom: 20 }}
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
          style={{ width: "100%", marginBottom: 20 }}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={{ marginTop: 20, width: "100%" }}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
