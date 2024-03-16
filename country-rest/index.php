<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./fontawesome-6.2.1/css/all.css">
    <link rel="stylesheet" href="./bootstrap-5.3.0-dist/css/bootstrap.css">
    <link rel="stylesheet" href="./countryapi.css">
    <script src="./bootstrap-5.3.0-dist/js/bootstrap.js" ></script>
    <title>Rest Country</title>
</head>
<body id="myBody" >
    <div class="row heading-div">
        <div class="col-lg-6">
            <h1 id="head">Anywhere in the World</h1>
        </div>
        <div class="col-lg-6 togglediv">
            <button class="btn btn-primary" id="togglebtn">Dark Mode</button>
        </div>
    </div>

    <div class="row filter-div">
        <div class="col-lg-6 searchbox-div">
            <input type="search" class ="searchbox" id="searchcontent" 
            placeholder="Search for a country..." onkeyup="Search()">
        </div>

        <div class="col-lg-6 filterRegion">
        <select name="region" id="regions" class = "regions">
            <option value="">Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic"> Antarctic</option>
        </select>
        </div>
    </div>
    <div class="container content-container" id="infos">

    </div>
    <script src="./countryapi.js"></script>

</body>
</html>