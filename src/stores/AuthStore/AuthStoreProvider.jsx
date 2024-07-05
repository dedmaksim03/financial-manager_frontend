import { createContext, useContext } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import AuthStore from './AuthStore';

const Context = createContext(null);

export const AuthStoreProvider = observer(({ children, ...props }) => {
    return <Context.Provider value={AuthStore}>{children}</Context.Provider>;
});

export const useAuthStore = () => {
    const authStore = useContext(Context);
    if (!authStore) throw new Error('Use App store within provider!');
    return authStore;
};