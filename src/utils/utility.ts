
export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }
}

export const truncateOverflow = (sentence: string) => {
  if (sentence.length > 13) {
    return sentence.substring(0, 13) + "...";
  } else {
    return sentence;
  }
};

export function convertStringsToArray(string: string) {
  const data = string.split(",");
  return data;
}