import styled from 'styled-components';

import { useGameStats } from './game-stats.hook';

export const GameStats = () => {
  const { guessesMade, successfulGuesses, wrongGuesses } = useGameStats();

  return (
    <Layout>
      <Title>Game stats</Title>
      <Record>Guesses made: {guessesMade}</Record>
      <Record>Successful guesses: {successfulGuesses}</Record>
      <Record>Wrong guesses: {wrongGuesses}</Record>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 12px;
  border: 1px dashed white;
`;

const Title = styled.h2`
  line-height: 16px;
`;
const Record = styled.p`
  line-height: 14px;
`;
