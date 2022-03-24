var defval = $("h1").text();
function incBtn() {
    // alert(defval);
    
    $("h1").text(++defval);
}
function dcBtn() {
  // alert(defval);

  $("h1").text(--defval);
}