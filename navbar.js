const navBarHtml = `
<html>

    <head>
        <base target="/" href="/">
        <link rel="stylesheet" href="navbar.css">
        <link rel="stylesheet" href="styles.css">
    </head>
    <div class="topnav">
        <a class="active" href="index.html">Home</a>
        
        <div class="dropdown">
            <button class="dropbtn">Industry Background
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./background/scope.html">Scope</a>
                <a href="./background/market.html">Market Overview</a>
                <a href="./background/technology.html">Technology Overview</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Threat Trends
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./threatTrends/globaltrends.html">Global Threat Trends</a>
                <a href="./threatTrends/threatactors.html">Threat Actors</a>
                <a href="./threatTrends/threatstats.html">Threat Trend Stats</a>
                <a href="./threatTrends/criticalassetid.html">Critical Asset Identification</a>
            </div>
        </div>
        
        <a href="assets.html">Critical Assets</a>

        <div class="dropdown">
            <button class="dropbtn">Diamond Models
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./diamondModels/loginData.html">Customer Website Login Data</a>
                <a href="./diamondModels/hr.html">HR Information</a>
            </div>
        </div>

        <a href="insights.html">Key Insights</a>
        <a href="operationalintel.html">Operational Intel</a>
        <a href="platform.html">Platform Direction</a>
    </div>

</html> 
`

window.onload = () => {
    const navBar = document.createElement('div');
    navBar.innerHTML = navBarHtml;
    document.body.insertBefore(navBar, document.body.firstChild);
}