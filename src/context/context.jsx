import React, { createContext } from 'react';

export const IssueListContext = createContext();
const IssueListContextProvider = () => {
  console.log();
  return <IssueListContext.Provider />;
};

export default IssueListContextProvider;
