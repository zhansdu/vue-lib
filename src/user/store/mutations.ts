import states from "./states";
export default {
  changeTheme(theme: string): void {
    const id = "theme";
    if (theme) {
      if (document.getElementById(id)) {
        (document.getElementById(id) as HTMLDivElement).remove();
      }
      const head = document.getElementsByTagName("head")[0];
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "/styles/themes/" + theme + ".css";
      link.media = "all";
      head.appendChild(link);
      states.theme = theme;
      localStorage.setItem("theme", theme);
    }
  },
};
