
<?php
/* 

$query="select * from student";
$result=mysqli_query($con, $query); */




$q = intval($_GET['q']);

$con = mysqli_connect("localhost", "root", "", "demo","3306");
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"demo");
$sql="SELECT * FROM student WHERE id = '".$q."' ";
$result = mysqli_query($con,$sql);

echo "<table>
<tr class="tr-1">
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Country</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['ID'] . "</td>";
  echo "<td>" . $row['Name'] . "</td>";
  echo "<td>" . $row['Email'] . "</td>";
  echo "<td>" . $row['Country'] . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>


