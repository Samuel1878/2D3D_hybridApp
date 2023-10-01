import { useContext } from "react";
import DataContext from "../services/data/dataContext";
export const kbzPay = require("../../assets/kbzPay.png");
export const ayaPay = require("../../assets/ayaPay.jpeg");
export const cbPay = require("../../assets/cb.png");
export const wavePay = require("../../assets/wavePay.png");
export const DATA = [
  {
    id: 1,
    title: "Bet History",
    src: require("../../assets/history.json"),
  },
  {
    id: 2,
    title: "Level",
    src: require("../../assets/rewardStar.json"),
  },
  {
    id: 3,
    title: "Pin management",
    src: require("../../assets/lock.json"),
  },
  {
    id: 4,
    title: "Change Password",
    src: require("../../assets/privacy.json"),
  },
  {
    id: 5,
    title: "Invite code",
    src: require("../../assets/gift.json"),
  },
  {
    id: 6,
    title: "Rate us",
    src: require("../../assets/star.json"),
  },
  {
    id: 7,
    title: "Version ",
    src: require("../../assets/playStore.json"),
  },
  {
    id: 8,
    title: "Terms of us",
    src: require("../../assets/changePassword.json"),
  },
  {
    id: 9,
    title: "Logout",
    src: require("../../assets/exit.json"),
  },
];
export const IMAGES = [
  require("../../assets/bgA.png"),
  require("../../assets/bgB.jpg"),
  require("../../assets/bgE.png")
];
// export const _3D_DATA = ()=>{
//    const {history3D} = useContext(DataContext);
//    console.log(history3D)
//    return history3D;
// }
