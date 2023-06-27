/* import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Modal } from "./src/Components/Modal";
import { Fontisto } from '@expo/vector-icons';

const Lol = axios.create({
  baseURL: "http://ddragon.leagueoflegends.com/cdn",
});

interface ChampionData {
  data: {
    [key: string]: Champion;
  };
}

interface Champion {
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
}

export function getChampions(): Promise<AxiosResponse<ChampionData>> {
  const url = `/12.6.1/data/pt_BR/champion.json?locale=pt_BR`;

  return Lol.get(url);
}

export default function App() {
  const [championData, setChampionData] = useState<ChampionData | undefined>(
    undefined
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedChampion, setSelectedChampion] = useState<Champion>(
    {} as Champion
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getChampions();
        setChampionData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const renderChampion = ({ item }: { item: Champion }) => (
    <TouchableOpacity
      onPress={() => openModal(item)}
      style={styles.championItem}
    >
      <Image
        source={{
          uri: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${item.image.full}`,
        }}
        style={styles.championImage}
      />
      <Fontisto name="favorite" size={24} color="#fff" />
      <Text style={styles.championName}>{item.name.toUpperCase()}</Text>
    </TouchableOpacity>
  );

  const openModal = (champion: Champion) => {
    setSelectedChampion(champion);
    setIsModalVisible(true);
  };

  return (
    <>
      <Modal
        selectedChampion={selectedChampion}
        isModalVisible={isModalVisible}
        setModalIsVisible={setIsModalVisible}
      />
      <View style={styles.containerChampion}>
        {championData && (
          <FlatList
            data={Object.values(championData.data)}
            renderItem={renderChampion}
            keyExtractor={(item: Champion) => item.name}
            numColumns={4}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerChampion: {
    flex: 1,
    backgroundColor: "#000000",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  championItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 16,
  },
  championImage: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  championName: {
   
    width: 100,
    height: 20,
    fontSize: 10,
    fontWeight: "300",
    color: "white",
    paddingLeft: 10,
    alignItems: "center",
  },
});*/

import React, { Component, } from 'react';
import { View, Text, FlatList, Image, StyleSheet, StatusBar, Platform,  } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { Feather, AntDesign, MaterialCommunityIcons, FontAwesome5, Fontisto, SimpleLineIcons } from '@expo/vector-icons';

interface ChampionData {
  data: {
    [key: string]: Champion;
  };
}

interface Champion {
  name: string;
  title: string;
  blurb: string;
  spells: Spell[];
}

interface Spell {
  name: string;
  description: string;
  image: {
    full: string;
  };
}

class ChampionList extends Component {
  state = {
    champions: [],
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const response: AxiosResponse<ChampionData> = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/championFull.json'
      );
      const champions = Object.values(response.data.data);
      this.setState({ champions, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  }

  renderSpellItem = (spell: Spell) => (
    <View style={styles.HABpage}>
    <View style={styles.HABcontainer}>
      <Text style={styles.HABTxtPassive}>HABILIDADE</Text>
      <Text style={styles.HABName}>{spell.name}</Text>
      <View style={styles.HABContentView}>
        <Image
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/${spell.image.full}`,
          }}
          style={{ width: 70, height: 70, margin: 7, borderWidth: 1, borderColor: '#C89B3C',}}
        />
        <Text style={styles.HABDescription}>{spell.description}</Text>
      </View>
    </View>
    </View>
  );

  renderChampionItem = ({ item }: { item: Champion }) => (
    <View style={styles.HABpage}>
      <View style={styles.modalHeader}>
          <AntDesign name="arrowleft" size={25} color="#C8AA6E"/>
          <Text style={styles.modalTxtHeader}>Informações do Campeão</Text>
        </View>
    <View style={styles.CHAMPcontainer}>
      <Text style={styles.HABName}>{item.name}</Text>
      <Text style={{  color: '#c1c1c1', fontSize: 12, fontWeight: 300, fontStyle: 'italic'} }>{item.title}</Text>
      <Text style={styles.HABDescription}>{item.blurb}</Text>
      <FlatList
        data={item.spells}
        renderItem={({ item }) => this.renderSpellItem(item)}
        keyExtractor={(item) => item.name}
      />
    </View>
    </View>
  );

  render() {
    const { champions, isLoading } = this.state;

    if (isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={champions}
          renderItem={this.renderChampionItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}

export default ChampionList;

const styles = StyleSheet.create({

  HABpage:{
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "black",
  },

  HABcontainer: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#C89B3C',
    backgroundColor: "#1E2328",
    marginTop: 1,
    borderRadius: 20
  },

  HABName: {
    borderWidth: 0.199,
    borderColor: '#C89B3C',
    color: '#fff',
    fontSize: 17,
    fontWeight: 600,
    paddingHorizontal: 5,
    paddingVertical: 5
  },

  HABDescription: {
   
    fontSize: 13,
    fontWeight: 500,
    color: "#fff",
    paddingVertical: 40,
    marginLeft: 7,
    marginRight: 20
  },

  HABContentView:{
    flexDirection: 'row',
  },

  HABTxtPassive:{
    color: "#d3d3d3",
    fontSize: 13,
    fontWeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 2,

  },

  CHAMPcontainer:{
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#C89B3C',
    backgroundColor: "#1E2328",
    marginTop: 1,
    borderRadius: 20
  },

  modalHeader: {
    alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: "#121212",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 0.199,
        borderColor: '#C89B3C',
  },

  modalTxtHeader:{
    fontSize: 20,
    color:"#C8AA6E",
    fontWeight: "600"
},
  
})