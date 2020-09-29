import React from 'react';
import { StyledChar, StyledGame, StyledScore, StyledTimer } from '../styled/Game';
import { Strong } from '../styled/Utils';

export default function Game() {
	return (
		<StyledGame>
			<StyledScore>
				Score:<Strong>0</Strong>
			</StyledScore>
			<StyledChar>A</StyledChar>
			<StyledTimer>
				Time: <Strong>00:00</Strong>
			</StyledTimer>
		</StyledGame>
	);
}
