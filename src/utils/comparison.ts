export const compareObjects = (obj1: any, obj2: any) => {
  const equal: any = {};
  const differ: any = {};

  for (const key in obj1) {
    if (typeof obj1[key] === "object") {
      let flag = true;
      for (const subKey in obj1[key]) {
        if (obj1[key][subKey] !== obj2[key][subKey]) {
          differ[key] = obj1[key];
          flag = false;
          break;
        }
      }
      if (flag) equal[key] = obj1[key];
      continue;
    }

    if (obj1[key] === obj2[key]) equal[key] = obj1[key];
    else differ[key] = obj1[key];
  }

  return [equal, differ];
};
