export const dateGenerator= async()=>{
    const date = new Date();
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    let T = date.getHours();
    let P ;
   (T>=12)?P = "ev":P = "af";
    const DateString = P+D+"/"+M+Y
  return DateString.toString()

}
