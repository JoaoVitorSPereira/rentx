import React from 'react';

import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/load_animation.json';

import { Container } from './styles';

export function LoadAnimated() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        loop
        resizeMode='contain'
        style={{ height: 200 }}
      />
    </Container>
  );
}
