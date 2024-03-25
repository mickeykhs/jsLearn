//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기

//2. 환율정보 가져오기
//3. 드랍다운 리스트에서 아이템 선태갛면 아이템이 바뀜

//4. 금액을 입력하면 환전이 된다.
//5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨

//6. 숫자를 한국어로 읽는 법
//7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다!


let currencyRatio = {
  USD: {
    KRW: 1303.28,
    USD: 1,
    VND: 23340.0,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00077,
    VND: 17.91,
    unit: "원",
  },
  VND: {
    KRW: 0.056,
    USD: 0.000043,
    VND: 1,
    unit: "동",
  },
};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let fromCurrency = "USD";
let toCurrency = "USD";
//console.log(currencyRatio.USD.unit);
//                  =
//console.log(currencyRatio['VND']['unit']);

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1. 버튼을 가져온다
    //2. 버튼의 값을 바꾼다
    document.getElementById("from-button").textContent = this.textContent;

    //3. 선택된 currency값을 변수에 저장해준다
    fromCurrency = this.textContent;
    //console.log("fromCurrency는", fromCurrency);
    convert("from");
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    convert("from");
  })
);

//1. 키를 입력하는 순간
//2. 환전이되서
//3. 환전된값이 보인다

function convert(type){
    let amount = 0;
    if(type == "from"){
      //1. 환전
      // 얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지
      // 돈 * 환율 = 환전금액
      let amount = document.getElementById("from-input").value;
      let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
      //console.log("환전결과 ", convertedAmount);
      renderKoreanNumber(amount, convertedAmount);

      document.getElementById("to-input").value = convertedAmount;
    } else {
        amount = document.getElementById("toAmount").value;
        let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
        document.getElementById("fromAmount").value = convertedAmount;
        renderKoreanNumber(convertedAmount, amount);
    }
}

function renderKoreanNumber(from, to){
    document.getElementById("fromNumToKorea").textContent = readNum(from) + currencyRatio[fromCurrency].unit;
    document.getElementById("toNumToKorea").textContent = readNum(to) + currencyRatio[toCurrency].unit;
}

function readNum(num){
    let resultString = "";
    let resultArray = [];
    for(let i=0; i<unitWords.length; i++){
        let unitResult = (num % Math.pow(splitUnit, i+1))/ Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if(unitResult >0){
            resultArray[i] = unitResult;
        }
    }

    for(let i=0; i<resultArray.length; i++){
        if(!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
}
//1. 드랍다운 리스트에 값이 바뀔때마다
//2. 환전을 다시한다