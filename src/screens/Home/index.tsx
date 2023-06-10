import React, { useCallback, useEffect, useState } from 'react';
import { Container, Divider, NomeJogador, Placar, ResetScore, StartGame, TextPlacar1, TextPlacar2, Time, TimeView, Title, ViewPlacar, ViewRow } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

export function Home() {
	Icon.loadFont();

	const [point1, setPoint1] = useState(0);
	const [point2, setPoint2] = useState(0);
	const [game1, setGame1] = useState(0);
	const [game2, setGame2] = useState(0);
	const [start, setStart] = useState(false);

	function resetPoints() {
		setPoint1(0);
		setPoint2(0);
	}

	function setGame() {
		if (point1 > point2) {
			setGame1(game1 + 1);
		} else if (point1 === point2){
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


	return (
		<Container>
			<TimeView>
				<ViewRow>
					<Icon name='alarm' size={20} color="#000000"/> 
					<Stopwatch start={start} reset={!start} options={options}/>
				</ViewRow>
			</TimeView>
			<Title>Torneio de Ping Pong</Title>
			<ViewRow style={{paddingHorizontal: '20%', justifyContent: 'space-between'}}>
				<Placar style={{width: '50%'}} onPress={() => setPoint1(point1 + 1)}>
					<NomeJogador>Jogador 1</NomeJogador>
					<ViewRow style={{width: '100%'}}>
						<View style={{width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<TextPlacar1>Games</TextPlacar1>
							<NomeJogador style={{fontSize: 30}}>{game1}</NomeJogador>
						</View>
						<TextPlacar1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 80, width: '70%'}}>{point1}</TextPlacar1>
					</ViewRow>
				</Placar>
				<Divider/> 
				<Placar style={{width: '50%'}} onPress={() => setPoint2(point2 + 1)}>
					<NomeJogador>Jogador 2</NomeJogador>
					<ViewRow style={{width: '100%'}}>
						<TextPlacar2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 80, width: '70%'}}>{point2}</TextPlacar2>
						<View style={{width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<TextPlacar2>Games</TextPlacar2>
							<NomeJogador style={{fontSize: 30}}>{game2}</NomeJogador>
						</View>
					</ViewRow>
				</Placar>
			</ViewRow>
			
			<ResetScore>
				<ViewRow>
					<Icon name='restore' size={20} color="#000000"/>
					<Time onPress={resetPoints}>Voltar pontuação</Time>
				</ViewRow>
			</ResetScore>

			<View style={{width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<StartGame style={{padding: 20}} onPress={startStopGame}>
					<Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>{start ? 'Parar jogo' : 'Iniciar jogo'}</Text>
				</StartGame>
			</View>
			
		</Container>
	);
}
