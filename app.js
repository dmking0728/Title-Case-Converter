//define dom elements to work with
const button = document.querySelector('.button');
const copy = document.querySelector('#copy');

//event listeners
button.addEventListener('click', grabText);
copy.addEventListener('click', copyTo);


function grabText() {
  const textBox = document.querySelector('#text-box').value;
  const splitStr = textBox.toLowerCase().split(" ");
  const exceptions = ["and", "the", "a", "an", "for", "to","but", "at","by", "on", "as", "in", "of", "so", "by", "nor", "or", "up", "yet"]

  if(textBox == "") {
    alert('Enter a title!')
    //if the user already submitted once and wants to submit again, clear the prior result and run lowercase code again. if no prior result found, AKA it is their first time submitting, just run the lowercase code.
  } else if (document.contains(document.querySelector('.result'))) {
    document.querySelector('.result').remove();

    for(i = 0; i < splitStr.length; i++) {
      //if it is not the 1st item in the splitStr array (the first word) and it is found in the exception array, then we skip running the capitlization code that follows (it will be lowercase)
      if(i > 0 && exceptions.includes(splitStr[i]))
      //if it is found in exception array skip capitilization 
      continue;
  
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
  
    const array = splitStr.join(" ");
    array.toString();
    const h1 = document.createElement("h1");
    h1.className = 'result';
    h1.innerHTML = array;
    document.body.querySelector(".result-div").appendChild(h1);

  } else {
    for(i = 0; i < splitStr.length; i++) {
      //if it is not the 1st item in the splitStr array (the first word) and it is found in the exception array, then we skip running the capitlization code that follows (it will be lowercase)
      if(i > 0 && exceptions.includes(splitStr[i]))
      //if it is found in exception array skip capitilization 
      continue;
  
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
  
    const array = splitStr.join(" ");
    array.toString();
    const h1 = document.createElement("h1");
    h1.className = 'result';
    h1.innerHTML = array;
    document.body.querySelector(".result-div").appendChild(h1);
  }
}


//function below will grab '.result' (converted title) and then create a hidden textbox input to paste this into. Then it will copy it to your clipboard
function copyTo(){
  const copyTitle = document.querySelectorAll('.result');
  const textBox = document.querySelector('#text-box').value;

  if(textBox === ""){
    alert('Enter a title!');
  } else {
    //create hidden input div to paste converted title and copy it to the clipboard
    let html = "";
    html += copyTitle[0].innerHTML;
    const hiddenInput = document.createElement('input');
    document.body.appendChild(hiddenInput);
    hiddenInput.id = 'hidden';
    hiddenInput.value = html;
    hiddenInput.select();
    document.execCommand("copy", false);
    alert('Copied!');
    }
  }
