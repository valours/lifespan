export const getLifeByYear = (year: number = 90) => {
  const years: Array<number> = [];

  for (let index = 1; index <= 90; index++) {
    years.push(index);
  }

  return years;
};

export const chunck = (array: Array<number>) => {
  const per = (perChunk: number) => {
    const arrayChunck: Array<Array<number>> = [];

    while (array.length > 0) {
      arrayChunck.push(array.splice(0, perChunk - 1));
    }

    return arrayChunck;
  };

  return { per };
};

export const decade = 10;
