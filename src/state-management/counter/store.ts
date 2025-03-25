import { create } from "zustand";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  // the arrow function returns an object
  counter: 0,
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  //reset: () => set((store) => ({ counter: 0 })),
  reset: () => set((store) => ({ max: 10 })),
  // just testing the feature of state management system that a component only re-renders when the state changes
}));

//the above code is equivalent to the below using the conventinal function syntax
//for understanding the arrow function syntax

/*const useCounterStore = create<CounterStore>(function (set) {
  return {
    counter: 0,
    increment: function () {
      set(function (store) {
        return { count: store.counter + 1 };
      });
    },
    decrement: function () {
      set(function (store) {
        return { counter: 0 };
      });
    },
  };
});*/

export default useCounterStore;
