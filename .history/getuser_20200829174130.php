
<?php
$q = intval($_GET['q']);

$con = mysqli_connect("localhost", "root", "", "demo","3306");
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}


mysqli_select_db($con,"student");
$sql="SELECT * FROM demo WHERE id = '".$q."'";
$result = mysqli_query($con,$sql) or die( mysqli_error($con));

echo "<table>
<tr>
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


