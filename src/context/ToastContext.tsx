import { createContext } from 'react';

interface ToastContextType {
    success: (value: string) => void;
    error: (value: string) => void;
    info: (value: string) => void;
}

const ToastContext = createContext<ToastContextType>({
    success: () => {},
    error: () => {},
    info: () => {},
});


export { ToastContext };
