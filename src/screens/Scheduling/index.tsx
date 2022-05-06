import React, { useState } from 'react';

import { Platform, View, StatusBar } from 'react-native';

import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from '../../components/Calendar';

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

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  }

  function handleBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton color={theme.colors.shape} onPress={handleBack} />
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
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
}
