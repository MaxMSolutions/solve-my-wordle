import { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';

const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error('useHomeContext must be used within a HomeContextProvider');
    }
    return context;
};

export default useHomeContext;
