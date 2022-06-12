const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == "") {
      reject("Error!");
    } else if (emosi == "marah") {
      (async () => {
        const dataIIX = calculate(await promiseTheaterIXX(), emosi);
        const dataVGC = calculate(await promiseTheaterVGC(), emosi);
        resolve(dataIIX + dataVGC);
      })();
    } else if (emosi == "tidak marah"){
      (async () => {
        const dataIIX = calculate(await promiseTheaterIIX(), emosi);
        const dataVGC = calculate(await promiseTheaterVGC(), emosi);
        resolve(dataIXX + dataVGC);
      })();
    }
  })
};

function calculate(data, feel) {
  let a = 0;
  if(feel == "marah"){
    for (const element of data){
      if (element.hasil == "marah"){
        a++;
      }
    }
  } else {
    for (const element of data){
      if (element.hasil == "tidak marah"){
        a++;
      }
    }
  } return a;
}


module.exports = {
  promiseOutput,
};
