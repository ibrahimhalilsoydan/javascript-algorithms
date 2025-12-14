export const binaryReversal = (str) => {

    const binary = Number(str).toString(2);

    // En az 8 bit yap, gerekirse 8'in üstüne çıkabilir
    const paddedBinary = binary.padStart(8, "0");

    const reversedBinary = paddedBinary.split("").reverse().join("");

    return parseInt(reversedBinary, 2);
};