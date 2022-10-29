const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
   
    console.log(input.value); 

    return fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
      console.log(data);
  });
});
}



document.addEventListener('DOMContentLoaded', init);

