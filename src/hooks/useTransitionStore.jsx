import { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
    const [activeTitle, setActiveTitle] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    return (
        <TransitionContext.Provider value={{ activeTitle, setActiveTitle, mousePos, setMousePos }}>
            {children}
        </TransitionContext.Provider>
    );
};

export const useTransitionContext = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error('useTransitionContext must be used within a TransitionProvider');
    }
    return context;
};
