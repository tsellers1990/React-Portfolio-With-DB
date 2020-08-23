import React from 'react';
import { StyledScoreboard } from './styles/StyledScoreboard';

export const ScoreBoard = ({ gameOver, text }) => (
  <StyledScoreboard gameOver={gameOver}>{text}</StyledScoreboard>
)

