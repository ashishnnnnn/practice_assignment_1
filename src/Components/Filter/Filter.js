import "./Filter.css";

export const Filter = ({ currState, setCurrState }) => {
  console.log(currState);
  return (
    <div className="filter">
      <button
        onClick={() => {
          setCurrState({ type: "CLEAR_FILTER" });
        }}
      >
        Clear Filter
      </button>
      <div className="price">
        <div>
          Price {"<="} {currState.price}
        </div>
        <input
          type="range"
          min="600"
          max="1000"
          step="10"
          value={currState.price}
          onChange={(e) => {
            setCurrState({ type: "PRICE", payload: e.target.value });
          }}
        />
      </div>
      <div className="sort-by">
        <div>
          <input
            type="radio"
            name="sort-by"
            id="my_radio"
            className="radio__input"
            value="LOW_TO_HIGH"
            checked={currState.sortBy === "LOW_TO_HIGH"}
            onChange={() => {
              setCurrState({ type: "SORTBY", payload: "LOW_TO_HIGH" });
            }}
          />
          <div>Low To High</div>
        </div>
        <div>
          <input
            type="radio"
            name="sort-by"
            id="my_radio"
            className="radio__input"
            value="HIGH_TO_LOW"
            checked={currState.sortBy === "HIGH_TO_LOW"}
            onChange={() => {
              setCurrState({ type: "SORTBY", payload: "HIGH_TO_LOW" });
            }}
          />
          <div>High To Low</div>
        </div>
      </div>
      <div className="brand">
        <div>Brand</div>
        <div className="input_container">
          <input
            type="checkbox"
            onChange={() => {
              setCurrState({ type: "BRAND", payload: "addidas" });
            }}
            checked={currState.brand.includes("addidas")}
          />
          <div>Addidas</div>
        </div>
        <div className="input_container">
          <input
            type="checkbox"
            onChange={() => {
              setCurrState({ type: "BRAND", payload: "here&how" });
            }}
            checked={currState.brand.includes("here&how")}
          />
          <div>Here&How</div>
        </div>
      </div>

      <div className="gender">
        <div>Gender</div>
        <div className="input_container">
          <input
            onChange={() => {
              setCurrState({ type: "GENDER", payload: "male" });
            }}
            checked={currState.gender.includes("male")}
            type="checkbox"
          />
          <div>Male</div>
        </div>
        <div className="input_container">
          <input
            onChange={() => {
              setCurrState({ type: "GENDER", payload: "female" });
            }}
            checked={currState.gender.includes("female")}
            type="checkbox"
          />
          <div>Female</div>
        </div>
      </div>
      <div className="size">
        <div>Size</div>
        <div className="input_container">
          <input
            onChange={() => {
              setCurrState({ type: "SIZE", payload: "small" });
            }}
            checked={currState.size.includes("small")}
            type="checkbox"
          />
          <div>Small</div>
        </div>
        <div className="input_container">
          <input
            onChange={() => {
              setCurrState({ type: "SIZE", payload: "medium" });
            }}
            checked={currState.size.includes("medium")}
            type="checkbox"
          />
          <div>Medium</div>
        </div>
        <div className="input_container">
          <input
            onChange={() => {
              setCurrState({ type: "SIZE", payload: "large" });
            }}
            checked={currState.size.includes("large")}
            type="checkbox"
          />
          <div>Large</div>
        </div>
      </div>
    </div>
  );
};
