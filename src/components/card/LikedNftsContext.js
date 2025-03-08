import { createContext, useContext, useState } from 'react';

const LikedNftsContext = createContext();

export const LikedNftsProvider = ({ children }) => {
  const [likedNfts, setLikedNfts] = useState([]);

  const addNftToHistory = (nft) => {
    setLikedNfts((prevNfts) => [...prevNfts, nft]);
  };

  const removeNftFromHistory = (nft) => {
    setLikedNfts((prevNfts) =>
      prevNfts.filter(
        (item) => item.title !== nft.title && item.author !== nft.author,
      ),
    );
  };

  return (
    <LikedNftsContext.Provider
      value={{ likedNfts, addNftToHistory, removeNftFromHistory }}
    >
      {children}
    </LikedNftsContext.Provider>
  );
};

export const useLikedNfts = () => useContext(LikedNftsContext);
