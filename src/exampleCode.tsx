import React from "react";
import {
  useRecoilState,
  selector,
  useTransactionObservation,
  atom,
} from "recoil";

// Example 1 -

const countState = atom({
  key: "countState",
  default: 0,
});

// Derived state with cound and external data
const totalCountState = selector({
  key: "totalCountState",
  get: async ({ get }) => {
    const previouseCountetDogs = await fetchData();
    return previouseCountetDogs + get(countState);
  },
});

export default () => {
  const [count, setCount] = useRecoilState(countState);

  return <button onClick={() => setCount(count + 1)}></button>;
};

// Simple atom states
const inputState = atom({ key: "inputState", default: null });
const filterState = atom({ key: "filterState", default: {} });

const outOfStockQuery = selector({ key: "outOfStockQuery", default: [] });

// Using derived state
const filteredItemsState = selector({
  key: "filteredItemsState",
  get: async ({ get }) => {
    const items = await fetchData(); // async

    const inputSearch = get(inputState);
    const filter = get(filterState);
    const itemsOutOfStock = get(outOfStockQuery(items)); // async

    return items.filter(filterItems(inputSearch, filter, itemsOutOfStock));
  },
});

// Global observation
const { atomValues, modifiedAtoms } = useTransactionObservation();

async function fetchData() {
  return Promise.resolve([]);
}

function filterItems(...args) {
  return (item) => {
    return item;
  };
}
