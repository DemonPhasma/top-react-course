import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

const AgeContext = createContext(50);

function App() {
  const [age, setAge] = useState(50);

  return (
    <AgeContext.Provider value={age}>
      <Parent setAge={setAge} />
    </AgeContext.Provider>
  );
}

function Parent({ setAge }: { setAge: Dispatch<SetStateAction<number>> }) {
  const handleDecrease = () => {
    setAge((prev) => prev - 2);
  };

  return (
    <div>
      <button onClick={handleDecrease}>Уменьшить возраст на 2</button>
      <Daughter />
    </div>
  );
}

function Daughter() {
  const age = useContext(AgeContext);
  return (
    <div>
      <div>Возраст: {age}</div>
      <Grandson />
    </div>
  );
}

function Grandson() {
  const age = useContext(AgeContext);
  return <div>Возраст (поделённый на 2): {age / 2}</div>;
}

export default App;
