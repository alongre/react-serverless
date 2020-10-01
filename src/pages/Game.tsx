import React, { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { History } from 'history';
import { StyledChar, StyledGame, StyledScore, StyledTimer } from '../styled/Game';
import { Strong } from '../styled/Utils';

const MAX_SECONDS = 90;

const Game = (props: { history: History }) => {
	const [score, setScore] = useState(1);
	const [ms, setMs] = useState('0');
	const [seconds, setSeconds] = useState(MAX_SECONDS.toString());

	useEffect(() => {
		const currentTime = new Date().getTime();
		const interval = setInterval(() => updateTime(currentTime), 1);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateTime = (startTime: number) => {
		const endTime = new Date().getTime();
		const msPassedStr = (endTime - startTime).toString();
		const formattedMSString = ('0000' + msPassedStr).slice(-5);
		const updatedSeconds: number = MAX_SECONDS - parseInt(formattedMSString.substring(0, 2)) - 1;
		const updatedMs: number = 1000 - parseInt(formattedMSString.substring(formattedMSString.length - 3));

		setSeconds(addLeadingZeros(updatedSeconds, 2));
		setMs(addLeadingZeros(updatedMs, 3));
	};

	const addLeadingZeros = (num: number, length: number): string => {
		let zeros = '';
		for (let index = 0; index < length; index++) {
			zeros += '0';
		}
		const leadingZeros = (zeros + num).slice(-length);
		return leadingZeros;
	};

	useEffect(() => {
		if (seconds <= '-1') {
			props.history.push('/gameOver');
		}
	}, [seconds, props.history]);

	useEffect(() => {
		const keyup = fromEvent(document, 'keyup');

		keyup.subscribe((e: any) => console.log(e.key));

		// return (() => keyup.un)
		// rxeturn (cleanUp = () => {});
	}, []);

	return (
		<StyledGame>
			<StyledScore>
				Score:<Strong>{score}</Strong>
			</StyledScore>
			<StyledChar>A</StyledChar>
			<StyledTimer>
				Time:{' '}
				<Strong>
					{seconds}:{ms}
				</Strong>
			</StyledTimer>
		</StyledGame>
	);
};

export default Game;
