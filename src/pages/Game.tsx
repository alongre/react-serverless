import React, { useEffect, useState } from 'react';
import { StyledChar, StyledGame, StyledScore, StyledTimer } from '../styled/Game';
import { Strong } from '../styled/Utils';

export default function Game() {
	const [score, setScore] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setScore((prevScore) => prevScore + 1);
		}, [1000]);
		return () => {
			clearInterval(interval);
		};
	}, [score]);

	return (
		<StyledGame>
			<StyledScore>
				Score:<Strong>{score}</Strong>
			</StyledScore>
			<StyledChar>A</StyledChar>
			<StyledTimer>
				Time: <Strong>00:00</Strong>
			</StyledTimer>
		</StyledGame>
	);
}
