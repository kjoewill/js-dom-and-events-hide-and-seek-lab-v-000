function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector( '#nested .target' );
}

function increaseRankBy(n) {
  let rlElements = Array.from(document.querySelectorAll( '.ranked-list'));

  rlElements.forEach ( function(e) {
    let i = parseInt(e.innerHTML);
    e.innerHTML = (i++).toString();
  });

}

function deepestChild() {
  let parentElement = document.getElementById('grand-node');
  console.log(parentElement);

  let pe = parentElement;
  while (pe.querySelector('div')) {
    console.log(pe);
    pe = pe.querySelector('div');
  }
  return pe;
}
