// Importar React e UseState (UseState => criar valores que podem mudar na tela)
import React, { useState } from "react";

// Importar componentes nativos do React Native
import {
  View, // Caixa | área da tela
  Text, // Textos
  Button, //Botões
  StyleSheet, // Estilos
  TouchableOpacity //Botão customizável 
} from "react-native-web";

// Componente principal APP 
export default function App() {

  // Cria um estado [variável php] chamado "pontos"
  const [pontos, setPontos] = useState(0); // ("pontos" => valor atual | setPontos => função para alterar o valor | 0 => valor inicial
  
  // Função para aumentar um ponto
  function aumentar() {
    setPontos(pontos + 1); // Soma 1 ponto no valor do valor atual
  }

  //Função para diminuir um ponto
  function diminuir() {
    setPontos(pontos - 1); // Subtrai 1 ponto do valor atual
  }

  // Função para resetar a contagem
  function resetar() {
    setPontos(0); // Reseta o valor para 0
  }
  return ( // Tudo o que está no RETURN aparece na tela
    <View style={styles.container} /* View principal do app */ > 
      <Text style={styles.titulo} /* Título do app */ > 
        🎮 Contador Gamer
      </Text>
      <Text style={styles.pontos} /* Mostra o valor dos pontos */>{pontos}</Text>
      <View style={styles.areaBotoes} /* Área dos botões +1 e -1 */>
        <TouchableOpacity onPress={aumentar} style={styles.botao}>
          <Text style={styles.textoBotao}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={diminuir} style={styles.botao}>
          <Text style={styles.textoBotao}>-1</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={resetar} style={styles.botaoReset}>
          <Text style={styles.textoBotao}>Resetar</Text>
        </TouchableOpacity>
    </View>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  container: { // Estilo da tela principal
    flex: 1, // Ocupa a tela inteira
    backgroundColor: '#121212', // Cor de fundo
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    padding: 20, // Espaçamento interno
  },

  titulo: { // Estilo do título
    fontSize: 32, // Tamanho da fonte
    color: '#00ff88', // Cor do texto
    fontWeight: 'bold', // Texto em negrito
    marginBottom: 30, // Espaço abaixo
  },

  pontos: { // Estilo dos pontos
    fontSize: 80, // Tamanho da fonte | Tamanho gigante
    color: '#ffffff', // Cor do texto
    marginBottom: 40, // Espaço abaixo
    fontWeight: 'bold', // Texto em negrito
  },

  areaBotoes: { // Áreas dos botões
    flexDirection: 'row', // Deixa um botão ao lado do outro
    marginBottom: 20, // Espaço abaixo
  },

  botao: {
    backgroundColor: '#00ff88', // Cor do botão
    paddingVertical: 15, // Espaçamento vertical
    paddingHorizontal: 30, // Espaçamento horizontal
    borderRadius: 12, // Arredondar bordas
    marginHorizontal: 10, // Espaço entre botões
  },

  botaoReset: {
    backgroundColor: '#ff3b30', // Cor do botão
    paddingVertical: 15, // Espaçamento vertical
    paddingHorizontal: 40, // Espaçamento horizontal
    borderRadius: 12, // Arredondar bordas
  },

  textoBotao: {
    fontSize: 22, // Tamanho da fonte
    color: '#000', // Cor do texto
    fontWeight: 'bold', // Texto em negrito
  }
});