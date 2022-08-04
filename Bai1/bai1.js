const checkSoNguyenTo = (number) => {
    let count = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    if (count === 2) {
      return true;
    } else {
      return false;
    }
  };
  
  document.getElementById('action').onclick = () => {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const result = document.getElementById('result');
  
    const listNumber = [];
    if (number1 <= number2) {
      for (let i = number1; i <= number2; i++) {
        if (checkSoNguyenTo(i) === true) {
          listNumber.push(i);
        }
      }
  
      if (listNumber.length === 0) {
        result.innerHTML = `<p>Không có số nguyên tố trong khoảng ${number1} -> ${number2}</p>`;
      } else {
        let stringHTML = '';
        for (let number of listNumber) {
          stringHTML += `<p>${number}</p>`;
        }
        result.innerHTML = stringHTML;
      }
    } else {
      result.innerHTML = `<p>Input không hợp lệ, yêu cầu number1 < number2</p>`;
    }
  };