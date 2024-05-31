import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

interface APIData {
  ip: string;
  location: Location;
  domains: Array<string>;
  as: As;
  isp: string;
}

interface GlobalContextType {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  loading: boolean;
  error: string | null;
  data: APIData | null;
}

export const GlobalContext = createContext<GlobalContextType>({
  searchParam: "",
  setSearchParam: () => {},
  handleSubmit: () => {},
  handleInputChange: () => {},
  inputValue: "",
  loading: false,
  error: null,
  data: null,
});

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [searchParam, setSearchParam] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<APIData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialIP = async () => {
      try {
        const response = await axios.get<{ ip: string }>(
          "https://api.ipify.org?format=json"
        );
        setSearchParam(response.data.ip);
      } catch (error) {
        console.error("Failed to fetch initial IP address", error);
      }
    };

    fetchInitialIP();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const API = `https://geo.ipify.org/api/v2/country,city?apiKey=at_wGo8dDHMrBNkikD9Em1atAeS1uHMN&ipAddress=${searchParam}`;
        const response = await axios.get<APIData>(API);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchParam) {
      fetchData();
    }
  }, [searchParam]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParam(inputValue);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        handleInputChange,
        inputValue,
        loading,
        error,
        data,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
