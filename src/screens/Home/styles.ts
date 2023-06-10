import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
    flex: 1;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ViewRow = styled(View)`
    display: flex;
    flex-direction: row;
`;

export const TimeView = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Time = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled(Text)`
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5%;
`;

export const ViewPlacar = styled(View)`
    display: flex;
`;

export const NomeJogador = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
`;

export const Placar = styled(TouchableOpacity)`
    padding: 10px;
`;

export const TextPlacar1 = styled(Text)`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
`;

export const Divider = styled(View)`
    width: 2px;
    background-color: ${({ theme }) => theme.colors.text};
`;

export const TextPlacar2 = styled(Text)`
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
    font-weight: bold;
`;

export const ResetScore = styled(TouchableOpacity)`
    display: flex;
`;

export const StartGame = styled(TouchableOpacity)`
width: 30%;
    background-color: ${({ theme }) => theme.colors.secondary};
`;