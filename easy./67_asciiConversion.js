export const asciiConversion =(str)=>{

    let ascii=""

   /*  for(let i=0; i<str.length;i++){

        ascii+= str[i].charCodeAt();

    } */

         return ascii =str.split('').reduce((asc,letter)=>{

            return asc += letter.charCodeAt()
        },"")

    /* return ascii; */
}