import * as React from "react";
import { useRouter } from "next/router";
import * as prismic from "@prismicio/client";
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
  const router = useRouter();
  const fetchAllPages = async () => {
    // @ts-ignore
    const endpoint: any = prismic.getEndpoint("funk27");
    // @ts-ignore
    const client: any = prismic.createClient(endpoint, { fetch });
    const { results } = await client.getByType("page");
    setPages(results);
  };

  const toggleLoading = (bool) => {
    setIsLoading(bool);
  };
  React.useEffect(() => {
    fetchAllPages();
  }, []);
  React.useEffect(() => {
    console.log("isLoading is ", isLoading);
  }, [isLoading]);
  React.useEffect(() => {
    if (!isLoading) {
      console.log("1 router.asPath true ", router.asPath);
      setIsLoading(true);
    }
  }, [router.asPath]);

  //   console.log("route ", router.route);
  //   console.log("pathname ", router.pathname);
  //   console.log("asPath ", router.asPath);
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
