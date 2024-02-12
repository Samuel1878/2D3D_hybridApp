
import { useContext } from "react";
import LocalContext from "../services/localization/localContext";
const themeProvider = () => {
    const {theme} = useContext(LocalContext);
    if(theme === "dark"){
        return dark
    } else {
        return light;
    }
}
export default themeProvider;

const common = {
  colors: {
    app_1: "rgb(243,186,47)",
    app_1: "rgb(243, 186, 47)",
    app_2: "rgb(231,187,65)",
    app_3: "rgb(246,214,88)",
    app_4: "rgb(251,206,41)",
  },
};
const dark = {
  colors: {
    text_1: "rgb(234,236,239)",
    text_2: "rgb(190, 202, 205)",
    text_3: "rgb(160,158,163)",
    text_4: "rgb(113,123,139)",
    text_1b: "rgb(31,35,40)",
    text_2b: "rgb(40,45,50)",
    ...common.colors,
    bg_1: "rgb(12,14,17)",
    bg_2: "rgb(24,26,31)",
    bg_3: "rgb(44,49,56)",
    bg_3b: "rgb(85,93,101)",
    bg_3c: "rgb(235,235,235)",
    bg_4: "rgb(250,250,250)",
    bg_5: "rgb(255,255,255)",
  },
};

const light = {
  colors: {
    text_1: "rgb(10,12,14)",
    text_2: "rgb(26, 31, 40)",
    text_3: "rgb(106,118,123)",
    text_4: "rgb(113,123,139)",
    text_1b: "rgb(250,250,250)",
    text_2b: "rgb(240,245,250)",
    ...common.colors,
    bg_1: "rgb(255,255,255)",
    bg_2: "rgb(250,250,250)",
    bg_3: "rgb(225,225,225)",
    bg_3b: "rgb(210,212,218)",
    bg_3c: "rgb(189,191,192)",
    bg_4: "rgb(26,31,41)",
    bg_5: "rgb(12,13,16)",
  },
};
