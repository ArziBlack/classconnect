
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

export function toObject(arr: Array<string | object>) {
  const rv = {};
  for (let i = 0; i < arr.length; ++i)
    rv[i] = arr[i];
  return rv;
}

export function covert2Object(arr: Array<string | object>) {
  const obj = Object.assign({}, arr);
  return obj;
}