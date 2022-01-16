import * as React from "react";
import { useRouter } from "next/router";
import { getEndpoint, createClient } from "@prismicio/client";
import fetch from "node-fetch";

type State = {
  isLoading: boolean;
  pages: any;
  fetchAllPages: () => void;
  toggleLoading: (bool: boolean) => void;
};

export const MainContext = React.createContext<State>({
  isLoading: false,
  pages: null,
  fetchAllPages: () => undefined,
  toggleLoading: () => false,
});

export const useMainContext = (): React.ContextType<typeof MainContext> =>
  React.useContext<State>(MainContext);

export const MainContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [pages, setPages] = React.useState(null);

  // const router = useRouter();
  const fetchAllPages = async () => {
    // @ts-ignore
    // const endpoint: any = getEndpoint("funk27");
    // // @ts-ignore
    // const client: any = createClient(endpoint, { fetch });
    // const { results } = await client.getByType("page");
    // setPages(results);
  };

  const toggleLoading = (bool) => {
    setIsLoading(bool);
  };

  React.useEffect(() => {
    fetchAllPages();
  }, []);

  React.useEffect(() => {
    console.log("isLoading: ", isLoading);
  }, [isLoading]);

  return (
    <MainContext.Provider
      value={{
        isLoading,
        pages,
        fetchAllPages,
        toggleLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
