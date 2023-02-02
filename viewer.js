var picNo = 1;

function revBtnClick() {
    picNo--;
    document.getElementById('no').innerHTML = 'No.' + picNo;
    document.getElementById('pict').src = 'img/' + picNo + '.jpg';
    document.getElementById('no').className = 'no' + picNo;
}
function fwdBtnClick() {
    picNo++;
    document.getElementById('no').innerHTML = 'No.' + picNo;
    document.getElementById('pict').src = 'img/' + picNo + '.jpg';
    document.getElementById('no').className = 'no' + picNo;
}