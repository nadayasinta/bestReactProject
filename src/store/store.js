import createStore from "unistore";

export const store = createStore({
  listZodiac: []
});

export const actions = store => ({
  setListZodiac(state, ZodiacInput) {
    return {
      listZodiac: ZodiacInput
    };
  }
});
