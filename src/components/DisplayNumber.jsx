const DisplayNumber = ({ number }) => (
    <div className="animate-fade-in">
        <p className="text-slate-400 text-lg mb-4">Memorize this number:</p>
        <div className="bg-slate-900/50 rounded-lg p-4">
            <p className="text-6xl font-mono font-bold tracking-widest text-cyan-400">{number}</p>
        </div>
    </div>
);

export default DisplayNumber;