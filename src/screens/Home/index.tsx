import React, { useState } from 'react';
import { Container, Divider, NomeJogador, Placar, ResetScore, StartGame, TextPlacar1, TextPlacar2, Time, TimeView, Title, ViewPlacar, ViewRow } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View, TextInput, Keyboard } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

export function Home() {
  Icon.loadFont();

  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);
  const [game1, setGame1] = useState(0);
  const [game2, setGame2] = useState(0);
  const [start, setStart] = useState(false);
  const [nomeJogador1, setNomeJogador1] = useState('Jogador 1');
  const [nomeJogador2, setNomeJogador2] = useState('Jogador 2');
  const [isEditing1, setIsEditing1] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);
  const [lastPlayer, setLastPlayer] = useState('');

  function resetPoints() {
    setPoint1(0);
    setPoint2(0);
    setLastPlayer('');
  }

  function voltarPontos() {
    if (lastPlayer === 'player1') {
      setPoint1(point1 - 1);
    } else if (lastPlayer === 'player2') {
      setPoint2(point2 - 1);
    }
  }

  function setGame() {
    if (point1 > point2) {
      setGame1(game1 + 1);
    } else if (point1 === point2) {
      setGame1(game1 + 1);
      setGame2(game2 + 1);
    } else {
      setGame2(game2 + 1);
    }
    resetPoints();
  }

  function startStopGame() {
    setStart(!start);
    start && setGame();
  }

  const options = {
    container: {
      backgroundColor: 'transparent',
      borderRadius: 5,
    },
    text: {
      fontSize: 18,
      color: '#000',
      marginLeft: 7,
    }
  };

  const handleNomeJogador1Change = (text) => {
    setNomeJogador1(text);
  };

  const handleNomeJogador1Submit = () => {
    Keyboard.dismiss();
    setIsEditing1(false);
  };

  const handleNomeJogador2Change = (text) => {
    setNomeJogador2(text);
  };

  const handleNomeJogador2Submit = () => {
    Keyboard.dismiss();
    setIsEditing2(false);
  };

  function handlePointPress(player) {
    if (player === 'player1') {
      setPoint1(point1 + 1);
      setLastPlayer('player1');
    } else if (player === 'player2') {
      setPoint2(point2 + 1);
      setLastPlayer('player2');
    }
  }

  return (
    <Container>
      <TimeView>
        <ViewRow>
          <Icon name='alarm' size={20} color="#000000" />
          <Stopwatch start={start} reset={!start} options={options} />
        </ViewRow>
      </TimeView>
      <Title>Torneio de Ping Pong</Title>
      <ViewRow style={{ paddingHorizontal: '20%', justifyContent: 'space-between' }}>
        <Placar style={{ width: '50%' }} onPress={() => handlePointPress('player1')}>
          {isEditing1 ? (
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
              value={nomeJogador1}
              onChangeText={handleNomeJogador1Change}
              onSubmitEditing={handleNomeJogador1Submit}
            />
          ) : (
            <NomeJogador onPress={() => setIsEditing1(true)}>{nomeJogador1}</NomeJogador>
          )}
          <ViewRow style={{ width: '100%' }}>
            <View style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TextPlacar1>Games</TextPlacar1>
              <NomeJogador style={{ fontSize: 30 }}>{game1}</NomeJogador>
            </View>
            <TextPlacar1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 80, width: '70%' }}>{point1}</TextPlacar1>
          </ViewRow>
        </Placar>
        <Divider />
        <Placar style={{ width: '50%' }} onPress={() => handlePointPress('player2')}>
          {isEditing2 ? (
            <TextInput
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
              value={nomeJogador2}
              onChangeText={handleNomeJogador2Change}
              onSubmitEditing={handleNomeJogador2Submit}
            />
          ) : (
            <NomeJogador onPress={() => setIsEditing2(true)}>{nomeJogador2}</NomeJogador>
          )}
          <ViewRow style={{ width: '100%' }}>
            <TextPlacar2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 80, width: '70%' }}>{point2}</TextPlacar2>
            <View style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TextPlacar2>Games</TextPlacar2>
              <NomeJogador style={{ fontSize: 30 }}>{game2}</NomeJogador>
            </View>
          </ViewRow>
        </Placar>
      </ViewRow>

      <ResetScore>
        <ViewRow>
          <Icon name='restore' size={20} color="#000000" />
          <Time onPress={voltarPontos}>Voltar pontuação</Time>
        </ViewRow>
      </ResetScore>

      <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <StartGame style={{ padding: 20 }} onPress={startStopGame}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>{start ? 'Parar jogo' : 'Iniciar jogo'}</Text>
        </StartGame>
      </View>
    </Container>
  );
}
