import { Component } from 'react';

/**
 * Error boundary for 3D Canvas
 * Catches WebGL and 3D rendering errors to prevent app crash
 */
class CanvasErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('3D Canvas Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
                    <div className="text-center max-w-md px-8">
                        <div className="text-6xl mb-6">⚠️</div>
                        <h2 className="text-3xl font-bold mb-4">3D Experience Unavailable</h2>
                        <p className="text-gray-400 mb-6">
                            Your device may not support WebGL or there was an error loading the 3D scene.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default CanvasErrorBoundary;
