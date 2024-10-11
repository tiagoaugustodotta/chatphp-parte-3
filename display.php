<?php
$directory = "uploads/";
$images = scandir($directory);
foreach ($images as $image) {
    if ($image !== '.' && $image !== '..') {
        echo "<div><img src='$directory$image' width='200'></div>";
    }
}
?>
