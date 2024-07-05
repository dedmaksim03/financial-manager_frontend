import { createContext, useContext } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import Store  from './AppStore.js';

const Context = createContext(null);

export const AppStoreProvider = observer(({ children, ...props }) => {
    return <Context.Provider value={Store}>{children}</Context.Provider>;
});

export const useAppStore = () => {
    const store = useContext(Context);
    if (!store) throw new Error('Use App store within provider!');
    return store;
};
