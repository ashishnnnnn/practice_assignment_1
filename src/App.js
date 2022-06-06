import "./App.css";
import myJson from "./data/data.json";
import { Card, Filter } from "./Components";
import { useReducer } from "react";
import { filterReducer } from "./Reducer/filterRedcuer";
import { dataAfterFilter } from "./Utils/dataAfterFilter";

const initialState = {
  price: 1000,
  sortBy: "NONE",
  brand: [],
  gender: [],
  size: [],
};

function App() {
  const products = myJson.products;
  const [currState, setCurrState] = useReducer(filterReducer, initialState);
  const dataToShow = dataAfterFilter(products, currState);
  return (
    <div className="App">
      <div className="container">
        <Filter currState={currState} setCurrState={setCurrState} />
        <div className="grid-container">
          {dataToShow.map((ele) => (
            <Card key={ele.name} product={ele} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
