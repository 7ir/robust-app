<!-- This file is a single file for comparing how nerdy names are connects and random selects 2 names from server -->


<?php 
$aVar = mysqli_connect('localhost', 'root', '', 'demo');

$query1 = mysqli_query($aVar, "SELECT Name FROM student
    ORDER BY RAND()
    LIMIT 1");
$aName1 = mysqli_fetch_assoc($query1);
$name1 = $aName1['Name'];

$query2 = mysqli_query($aVar, "SELECT Name FROM student
    ORDER BY RAND()
    LIMIT 1");
$aName2 = mysqli_fetch_assoc($query2);
$name2 = $aName2['Name'];
?>

<!-- 
<title>DorkHub. The online name-rating website.</title>
<link rel="stylesheet" type="text/css" href="style.css">
<body bgcolor='EAEAEA'>
<center>
<div id='TITLE'>
    <h2>DorkHub. The online name-rating website.</h2>
</div>
    <p>
    <br>
    <h3>  ?php echo $name1; ?></h3><h4> against </h4><h3>  ?php echo $name2; ?></h3>
    <br><br>
    <h2 style='font-family:Arial, Helvetica, sans-serif;'>Who's sounds the dorkiest?</h2>
    <br><br>
    <div id='vote'>
    <h3 id='done' style='margin-right: 10px'>VOTE FOR FIRST</h3><h3 id='done'>VOTE FOR LAST</h3> -->