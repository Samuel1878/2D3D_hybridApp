import { useTranslation } from "react-i18next";

export const kbzPay = require("../../assets/kbzPay.png");
export const ayaPay = require("../../assets/ayaPay.jpeg");
export const cbPay = require("../../assets/cb.png");
export const wavePay = require("../../assets/wavePay.png");
export const Data = [
  {
    method: "kbz",
    name: "Mr/Ms....",
    phone: "096...",
  },
  {
    method: "wave",
    name: "Mr/Ms....",
    phone: "097...",
  },
  {
    method: "cb",
    name: "Mr/Ms....",
    phone: "092...",
  },
  {
    method: "aya",
    name: "Mr/Ms....",
    phone: "098...",
  },
];
export const DATA = ()=>{
  const { t, i18n } = useTranslation();
  return (
    [
  {
    id: 1,
    title: t("bet history"),
    src: require("../../assets/history.json"),
  },
  {
    id: 2,
    title: t("level"),
    src: require("../../assets/rewardStar.json"),
  },
  {
    id: 3,
    title: t("pin management"),
    src: require("../../assets/lock.json"),
  },
  {
    id: 4,
    title: t("change password"),
    src: require("../../assets/privacy.json"),
  },
  {
    id: 5,
    title: t("invite code"),
    src: require("../../assets/gift.json"),
  },
  {
    id: 6,
    title: t("rate us"),
    src: require("../../assets/star.json"),
  },
  {
    id: 7,
    title: t("version"),
    src: require("../../assets/playStore.json"),
  },
  {
    id: 8,
    title: t("terms of us"),
    src: require("../../assets/changePassword.json"),
  },
  {
    id: 9,
    title: t("logout"),
    src: require("../../assets/exit.json"),
  },
]
  )

};

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
export const pinREGEX = /^[0-9]{6,6}$/g;
export const REGEX_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const kbzAccounts = [
  { name: "pave faef", phone: "092333444", qr: require("../../assets/qr.png") },
  {
    name: "laeveMOney",
    phone: "091232222",
    qr: require("../../assets/qr.png"),
  },
  {
    name: "lasdfa adf",
    phone: "0912334233",
    qr: require("../../assets/qr.png"),
  },
];
export const waveAccounts = [
  {
    name: "Pave Vayoi",
    phone: "092333444",
    qr: require("../../assets/qr.png"),
  },
  {
    name: "laeveMOney",
    phone: "091232222",
    qr: require("../../assets/qr.png"),
  },
  {
    name: "lasdfa fdfa",
    phone: "0912334233",
    qr: require("../../assets/qr.png"),
  },
];
export const ayaAccounts = [
  { name: "pave", phone: "092333444", qr: require("../../assets/qr.png") },
  {
    name: "laeveMOney",
    phone: "091232222",
    qr: require("../../assets/qr.png"),
  },
  {
    name: "lasdfa faa",
    phone: "0912334233",
    qr: require("../../assets/qr.png"),
  },
];
export const cbAccounts = [
  { name: "pave faasdfa", phone: "092333444" , qr: require("../../assets/qr.png") },
  {
    name: "Express aa",
    phone: "091232222",
    qr: require("../../assets/qr.png"),
  },
  {
    name: "U Aye Myit",
    phone: "09898883331",
    qr: require("../../assets/qr.png"),
  },
];