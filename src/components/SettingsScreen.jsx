import { useState } from "react";


const SettingsScreen = ({ onStart, initialConfig }) => {
    const [settings, setSettings] = useState(initialConfig);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSettings(prev => ({ ...prev, [name]: parseInt(value, 10) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onStart(settings);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
                <label htmlFor="digits" className="block text-lg font-medium text-slate-300 mb-2">
                    Number of Digits: <span className="font-bold text-white">{settings.digits}</span>
                </label>
                <input
                    type="range"
                    id="digits"
                    name="digits"
                    min="1"
                    max="10"
                    value={settings.digits}
                    onChange={handleChange}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
            </div>
            <div>
                <label htmlFor="duration" className="block text-lg font-medium text-slate-300 mb-2">
                    Wait Time (seconds): <span className="font-bold text-white">{settings.duration}</span>
                </label>
                <input
                    type="range"
                    id="duration"
                    name="duration"
                    min="1"
                    max="30"
                    value={settings.duration}
                    onChange={handleChange}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
            </div>
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg text-lg transition-colors duration-300 shadow-md shadow-cyan-500/20">
                Start Game
            </button>
        </form>
    );
};

export default SettingsScreen;