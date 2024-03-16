<?php
// Initiate the curl session
$ch = curl_init();

// Set the url and store in variable
$url = "https://restcountries.com/v3.1/all";

// set options for curl
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the curl and store in the variable
$resp = curl_exec($ch);

if (curl_error($ch)) {
    $error = curl_error($ch);
    echo "Error: " . $error;
} else {
    echo $resp; // Output JSON data
}

curl_close($ch);

