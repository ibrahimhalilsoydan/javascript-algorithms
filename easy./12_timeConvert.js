export const timeConvert = (num) => {
  return `${Math.floor(num / 60)}:${num % 60}`;
  /*
    const min = num%60
    const hour = Math.floor(num/60);
    return hour+":"+min;

*/

  /*let bolunan =Number(num);

    const bolen =60;
    let kucuk = bolunan%bolen

    let sonuc = Math.floor(bolunan/bolen)+":"+kucuk;


    return sonuc*/
};
