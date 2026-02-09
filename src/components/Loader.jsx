import { Html, useProgress } from '@react-three/drei';

/**
 * Professional loading component with progress indicator
 * Displays while 3D assets are loading
 */
function Loader() {
    const { progress, active } = useProgress();

    return (
        <Html center>
            <div className="flex flex-col items-center gap-4 px-8">
                {/* Progress percentage */}
                <div className="text-white text-4xl font-bold tracking-wider">
                    {progress.toFixed(0)}%
                </div>

                {/* Progress bar */}
                <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Loading text */}
                <p className="text-gray-400 text-sm tracking-wide">
                    Loading 3D Experience...
                </p>
            </div>
        </Html>
    );
}

export default Loader;
