const btn = document.querySelector(".btn");
const outInput = document.querySelector(".monthamountinput");
const container = document.querySelector(".wrapper");
const outResult = document.querySelector(".monthamountinput");

const outResultName = document.querySelector(".block2-target-name");
const outResultAmount = document.querySelector(".block2-amount-sum");
const outResultTerm = document.querySelector(".block2-term");
const outResulStart = document.querySelector(".block2-start");
const outResulDeposit = document.querySelector(".block2-deposit");

const input1 = document.querySelector(".nameofthegoallineinput");
const input2 = document.querySelector(".amountlineinput");
const input3 = document.querySelector(".periodlineinput");
const input4 = document.querySelector(".startlineinput");
const input5 = document.querySelector(".percentlineinput");
const outResultBlock = document.querySelector(".out-result");

let arrObj = [];

const addInputValueInObject = () => {
  let resultInputValue = {
    name: input1.value,
    amount: Number(input2.value),
    term: Number(input3.value),
    start: Number(input4.value),
    deposit: Number(input5.value),
  };

  arrObj.push(resultInputValue);

  outResultName.innerText = resultInputValue.name;
  outResultAmount.innerText = resultInputValue.amount;
  outResultTerm.innerText = resultInputValue.term;
  outResulStart.innerText = resultInputValue.start;
  outResulDeposit.innerText = resultInputValue.deposit;

  let resultBlockCalculation = calculation(
    resultInputValue.amount,
    resultInputValue.term,
    resultInputValue.start,
    resultInputValue.deposit
  );
  outResult.innerText = resultBlockCalculation.toFixed(4);
  outResultBlock.innerText = resultBlockCalculation.toFixed(4);
};

btn.addEventListener("click", addInputValueInObject);

const calculation = (amount, term, start, deposit) => {
  let treb = amount;
  let srok = term;
  let proc = deposit;
  let sumProc = 0;

  for (i = 1; i < srok + 1; i++) {
    sumProc = sumProc + (1 + proc / 100) ** i;
  }
  let sumPerMonth = (treb - (1 + proc / 100) ** srok * start) / sumProc;
  console.log(sumPerMonth);

  return sumPerMonth;
};

const changeResult = () => {
  let resultInputValue = {
    name: input1.value,
    amount: Number(input2.value),
    term: Number(input3.value),
    start: Number(input4.value),
    deposit: Number(input5.value),
  };

  let resultBlockCalculation = calculation(
    resultInputValue.amount,
    resultInputValue.term,
    resultInputValue.start,
    resultInputValue.deposit
  );
  outResult.innerText = resultBlockCalculation.toFixed(4);
  outResultBlock.innerText = resultBlockCalculation.toFixed(4);
};

input2.addEventListener("keyup", changeResult);
