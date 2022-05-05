import React from 'react';

import { Platform, View, StatusBar } from 'react-native';

import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            {Platform.OS === 'ios' ? (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.text,
                }}
              >
                <DateValue selected={false}>18/08/2022</DateValue>
              </View>
            ) : (
              <DateValue selected={false}>18/08/2022</DateValue>
            )}
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            {Platform.OS === 'ios' ? (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.text,
                }}
              >
                <DateValue selected={false}>18/08/2022</DateValue>
              </View>
            ) : (
              <DateValue selected={false}>18/08/2022</DateValue>
            )}
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
}
