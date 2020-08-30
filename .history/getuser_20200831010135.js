
function showUser(str) {
    if (str == "") {
      document.getElementById("txtHint").innerHTML = "";
      return;
    } else {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("txtHint").innerHTML = this.responseText;
        }
      };
      xmlhttp.open("GET","getuser.php?q="+str,true);
      xmlhttp.send();

      tableAddKey()
    }
  }   
  function tableAddKey() {
    tableAddKey = noop;
    awardKey ++;
    Check2();
    console.log('asdfsa');
    $('#yes').show();
    setTimeout(function () {
        $('#yes').hide();
    },1000);
  }