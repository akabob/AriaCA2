var Calcutalor = (function () {

    return {
   AddNo: function (ansID, Firstno, SecondNo) {

        var firstno = parseInt(document.getElementById(Firstno).value);
        var secondno = parseInt(document.getElementById(SecondNo).value);
        var answer = firstno + secondno

        document.getElementById(ansID).value = answer

    },

     MultplyNo: function(ansID, Firstno, SecondNo) {

        var firstno = parseInt(document.getElementById(Firstno).value);
        var secondno = parseInt(document.getElementById(SecondNo).value);
        var answer = firstno * secondno

        document.getElementById(ansID).value = answer

    },


     DivideNo: function(ansID, Firstno, SecondNo) {

        var firstno = parseInt(document.getElementById(Firstno).value);
        var secondno = parseInt(document.getElementById(SecondNo).value);
        var answer = firstno / secondno

        document.getElementById(ansID).value = currency(answer)

    },

     currency: function(n) { n = parseFloat(n); return isNaN(n) ? false : n.toFixed(2); }

}
})();// end of 