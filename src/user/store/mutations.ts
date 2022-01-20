import states from "./states";
const state = states.value;
export default {
  changeTheme(theme: string): void {
    console.log(state.theme);
    state.theme = theme;
    console.log(state.theme);
  },
};
