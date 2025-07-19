import { useState, useEffect } from 'react';

import DisplayNumber from './components/DisplayNumber';
import GuessInput from './components/GuessInput';
import HidingScreen from './components/HidingScreen';
import ResultScreen from './components/ResultScreen';
import SettingsScreen from './components/SettingsScreen';

function App() {

   const [phase, setPhase] = useState('settings'); // 'settings', 'displaying', 'hiding', 'guessing', 'result'
    const [config, setConfig] = useState({ duration: 5, digits: 4 });
    const [randomNumber, setRandomNumber] = useState('');
    const [_, setGuess] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const generateRandomNumber = (length) => {
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;
        return Math.floor(Math.random() * (max - min + 1) + min).toString();
    };

    const handleStart = (newConfig) => {
        setConfig(newConfig);
        setRandomNumber(generateRandomNumber(newConfig.digits));
        setPhase('displaying');
    };

    const handleSubmitGuess = (userGuess) => {
        setGuess(userGuess);
        const correct = userGuess === randomNumber;
        setIsCorrect(correct);
        setPhase('result');
    };

    const handlePlayAgain = () => {
        setPhase('settings');
        setGuess('');
        setIsCorrect(null);
        setRandomNumber('');
    };

    useEffect(() => {
        if (phase === 'displaying') {
            const timer = setTimeout(() => {
                setPhase('hiding');
            }, 2000);
            return () => clearTimeout(timer);
        }
        if (phase === 'hiding') {
            const timer = setTimeout(() => {
                setPhase('guessing');
            }, config.duration * 1000);
            return () => clearTimeout(timer);
        }
    }, [phase, config.duration]);

    const renderPhase = () => {
        switch (phase) {
            case 'displaying':
                return <DisplayNumber number={randomNumber} />;
            case 'hiding':
                return <HidingScreen />;
            case 'guessing':
                return <GuessInput onSubmit={handleSubmitGuess} />;
            case 'result':
                return <ResultScreen isCorrect={isCorrect} correctNumber={randomNumber} onPlayAgain={handlePlayAgain} />;
            case 'settings':
            default:
                return <SettingsScreen onStart={handleStart} initialConfig={config} />;
        }
    };

    return (
        <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center font-sans p-4">
            <div className="w-full max-w-md mx-auto bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 text-center">
                <h1 className="text-4xl font-bold text-cyan-400 mb-2">Retentive</h1>
                <p className="text-slate-400 mb-8">Test your short-term memory.</p>
                {renderPhase()}
            </div>
        </div>
    );
}

export default App
