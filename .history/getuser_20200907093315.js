
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
    // Add style change for table
    // Insert our new styles before the first script tag
    /* ref.parentNode.insertBefore(style, ref); */
  }   
  function tableAddKey() {
    tableAddKey = noop;
    
    awardKey ++;
    Check2();
    $('#yes').show();
    setTimeout(function () {
        $('#yes').hide();
        toMap();
    },500);
    setTimeout(function () {
      toMap();
  },2000);
  }