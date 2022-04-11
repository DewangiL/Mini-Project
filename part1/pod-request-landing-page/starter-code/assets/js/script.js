var testresults

function checkemail() {
  var str = document.validation.emailcheck.value
  var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  var x="Oops! Please check your email";
  if (filter.test(str))
    testresults = true
  else {
    document.getElementById("e-add").innerHTML = x;
    testresults = false
  }
  return (testresults)
}

function checkbae() {
  if (document.layers || document.getElementById || document.all)
    return checkemail()
  else
    return true
}