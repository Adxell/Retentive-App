const ResultScreen = ({ isCorrect, correctNumber, onPlayAgain }) => (
    <div className="flex flex-col items-center gap-4 animate-fade-in">
        {isCorrect ? (
            <div className="text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold mt-2">Correct!</h2>
            </div>
        ) : (
            <div className="text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold mt-2">Incorrect</h2>
            </div>
        )}
        <p className="text-lg text-slate-300">The number was: <span className="font-bold text-white text-2xl font-mono">{correctNumber}</span></p>
        <button onClick={onPlayAgain} className="mt-4 w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-lg text-lg transition-colors duration-300">
            Play Again
        </button>
    </div>
);

export default ResultScreen