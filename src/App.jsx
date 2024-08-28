import React from "react";
import { ContactsProvider } from "./context/ContactsContext";
import ContactsView from "./components/ContactsView";

const App = () => {
  return (
    <ContactsProvider>
      <ContactsView />
    </ContactsProvider>
  );
};

export default App;
