import * as React from 'react';

type State = {
    isLoading: boolean;
}

export const MainContext = React.createContext<State>({
    isLoading: false,
});

export const useMainContext = (): React.ContextType<typeof MainContext> => React.useContext<State>(MainContext);

export const MainContextProvider: React.FC = ({ children }) => {
    const [ isLoading, setIsLoading ] = React.useState<boolean>(false);


    return (
        <MainContext.Provider value={{ isLoading }}>
            {children}
        </MainContext.Provider>
    )
}