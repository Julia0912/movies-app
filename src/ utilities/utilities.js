export const shortenText = (str) => {
  if (str.length > 175) {
    return str.slice(0, 175) + "...";
  } else return str;
};
