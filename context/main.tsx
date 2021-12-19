import * as React from 'react';
import * as prismic from "@prismicio/client";
import fetch from "node-fetch";

type State = {
    isLoading: boolean;
    pages: any;
    fetchAllPages: () => void;
}

export const MainContext = React.createContext<State>({
    isLoading: false,
    pages: null,
    fetchAllPages: () => undefined,
});

export const useMainContext = (): React.ContextType<typeof MainContext> => React.useContext<State>(MainContext);

export const MainContextProvider: React.FC = ({ children }) => {
    const [ isLoading, setIsLoading ] = React.useState<boolean>(false);
    const [ pages, setPages ] = React.useState(null);

    const fetchAllPages = async () => {
        const endpoint = prismic.getEndpoint("funk27");
        const client = prismic.createClient(endpoint, { fetch });
        const { results } = await client.getByType("page");
        setPages(results)
    }

    React.useEffect(() => {
        fetchAllPages();
    }, [])

    return (
        <MainContext.Provider
            value={{
                isLoading,
                pages,
                fetchAllPages,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}