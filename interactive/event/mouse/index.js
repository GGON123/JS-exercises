const pElement = document.querySelector('p');
// const pElement = document.getElementsByTagName('p')[0];
console.log (pElement);
pElement.addEventListener('click', function(event){
  console.log(event);
});