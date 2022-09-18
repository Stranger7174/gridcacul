(function() {
  let setCol = document.getElementsByTagName('button');
  function responsivePer() {
    // 컬럼속성설정
    let pageWidth = document.getElementById('pageWidth').value,
        columCaunt = document.getElementById('colNum').value,
        mrgWidth = document.getElementById('margin').value,
        colWidth = document.getElementById('width').value;

    let viw = document.getElementById('ansser');

    class Calcul {
      allOnOffmarWidth() {
        return (columCaunt * 2) * mrgWidth;
      }

      allInnermarWidth() {
        return (columCaunt * 2 - 2) * mrgWidth;
      }
    }

    let allmargin = new Calcul();

    for (let i = 0; i < columCaunt; i++) {
      let iCount = columCaunt - i;
      let divWidth = document.createElement('div');
      viw.innerHTML += '<p>' + (i + 1) + 'colum-count</p>';
      console.dir(divWidth);

      for (let j = 0; j < iCount; j++) {
        let setDiv = document.createElement('div');
        setDiv.style.width = colWidth + 'px';
        setDiv.style.margin = mrgWidth + 'px';
        divWidth.append(setDiv);
      }
      viw.append(divWidth);

      // viw.innerHTML += '<br>';
    }
    // console.log((pageWidth / columCaunt));
    // console.dir(Allmargin.allInnermarWidth());
  }
  setCol[0].onclick = responsivePer;
})();