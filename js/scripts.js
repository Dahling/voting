$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('.votingAge').show();
  } else if (age === 17) {
    $('.earlyRegistration').show();
  } else {
    $('.underageVoter').show();
  }

});
