import { createContext, useContext } from 'react';

const AgeContext = createContext(42);

function App() {
  return (
    <AgeContext.Provider value={42}>
      <Parent />
    </AgeContext.Provider>
  );
}

function Parent() {
  return (
    <div>
      <Daughter />
    </div>
  );
}

function Daughter() {
  const age = useContext(AgeContext);
  return (
    <div>
      <Grandson /> Возраст: {age}
    </div>
  );
}

function Grandson() {
  const age = useContext(AgeContext);
  return <div>Возраст (поделённый на 2): {age / 2}</div>;
}

export default App;
