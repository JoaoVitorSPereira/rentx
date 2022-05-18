import React, { useState, useEffect } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { api } from '../../services/api';

import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';

import { Load } from '../../components/Load';

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton,
} from './styles';
import theme from '../../styles/theme';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMycars() {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <MyCarsButton onPress={handleOpenMycars}>
        <Ionicons name='ios-car-sport' size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
