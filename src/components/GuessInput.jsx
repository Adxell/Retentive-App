import { useState } from "react";

const GuessInput = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fade-in">
            <label htmlFor="guess" className="text-lg font-medium text-slate-300">
                What was the number?
            </label>
            <input
                type="number"
                id="guess"
                name="guess"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-slate-700 text-white text-center text-3xl font-mono p-3 rounded-lg border-2 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none"
                autoFocus
            />
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg text-lg transition-colors duration-300 shadow-md shadow-cyan-500/20">
                Check Answer
            </button>
        </form>
    );
};

export default GuessInput;