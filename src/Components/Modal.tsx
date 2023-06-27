import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView
} from "react-native";
import { styles } from "./styles";
import { Feather, AntDesign, MaterialCommunityIcons, FontAwesome5, Fontisto, SimpleLineIcons } from '@expo/vector-icons';

interface Champion {
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
}

interface ModalProps {
  isModalVisible: boolean;
  selectedChampion: Champion;
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function Modal({
  isModalVisible,
  selectedChampion,
  setModalIsVisible,
}: ModalProps) {
  function closeModal() {
    setModalIsVisible(false);
  }

  const championStats = selectedChampion?.stats || [];

  return isModalVisible ? (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <AntDesign name="arrowleft" size={25} color="#C8AA6E"/>
          <Text style={styles.modalTxtHeader}>Informações do Campeão</Text>
          <Fontisto name="favorite" size={25} color="#C8AA6E" />
        </View>

        <ScrollView>
          <View style={styles.modalHeaderInfo}>
            <Image

              source={{
                uri: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${selectedChampion.image.full}`,
              }}
              style={styles.modalImage}
            />
            <View style={styles.modalText}>
              <Text style={styles.modalName}>{selectedChampion?.name} </Text>
              <Text style={styles.modalTitle}>{selectedChampion?.title}</Text>
              <Text style={styles.modalTags}>{selectedChampion?.tags}</Text>
            </View>
          </View>

          <View style={styles.modalBiografia}>
            <Text style={styles.modalTituloBiografia} >BIOGRAFIA</Text>
            <Text style={styles.modalBlurb}>{selectedChampion?.blurb}</Text>
          </View>

          <View style={styles.modalBoxStats}>

            <Text style={styles.modalTituloStats} >INFORMAÇÕES</Text>

            <View style={styles.modalIconesStats}>
              <MaterialCommunityIcons name="sword" size={24} color="#fff" />
              <FontAwesome5 name="hand-holding-heart" size={24} color="#fff" />
              <Fontisto name="blood-drop" size={24} color="#fff" />
              <SimpleLineIcons name="drop" size={24} color="#fff" />
              <FontAwesome5 name="running" size={24} color="#fff" />
              <Feather name="shield" size={24} color="#fff" />
              <MaterialCommunityIcons name="shield-plus-outline" size={24} color="#fff" />
            </View>
           
            {Object.entries(selectedChampion.stats).map(([key, value], index) => (
              <Text key={index} style={styles.modalStats}>
                {key}: {value}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>

    </View>
  ) : (
    <></>
  );
}
