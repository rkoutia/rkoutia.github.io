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
                <a href="./background/scope.html">Retail Industry Scope</a>
                <a href="./background/market.html">Market Overview</a>
                <a href="./background/technology.html">Technology Overview</a>
                <a href="./background/globaltrends.html">Global Threat Trends</a>
                <a href="./background/retailtrends.html">Retail Threat Trends</a>
                <a href="./background/threatactors.html">Threat Actors</a>
                </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Threat Modeling
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./threatTrends/criticalassets.html">Critical Assets</a>
                <a href="./threatTrends/intelligencebuyin.html">Intelligence Buyin</a>
            </div>
        </div>
        
        <div class="dropdown">
            <button class="dropbtn">Diamond Models
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./diamondModels/logindata.html">Website Login Data</a>
                <a href="./diamondModels/customerdata.html">Customer Data</a>
                <a href="./diamondModels/employeedata.html">Employee Data</a>
                <a href="./diamondModels/employeecredentials.html">Employee Credentials</a>
                <a href="./diamondModels/proprietaryinfo.html">Proprietary Info</a>
                <a href="./diamondModels/supplierdata.html">Supplier Data</a>
                <a href="./diamondModels/internaldata.html">Internal Data</a>
                <a href="./diamondModels/hrinfo.html">HR Info and Workflows</a>
                <a href="./diamondModels/supplychaindisruption.html">Supply Chain Disruption</a>
                <a href="./diamondModels/firewallcompromise.html">Firewall Compromise</a>
                <a href="./diamondModels/networkdisruption.html">Network Disruption</a>
                <a href="./diamondModels/posskimmer.html">POS Skimmer</a>
                <a href="./diamondModels/barcodereader.html">Barcode Reader</a>
                <a href="./diamondModels/crosssitescripting.html">Cross Site Scripting</a>
                <a href="./diamondModels/ransomware.html">Ransomware Attack</a>
                <a href="./diamondModels/unpatchedserver.html">Unpatched Server</a>
                <a href="./diamondModels/ddosattack.html">DDOS Attack</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Data Summary
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./dataSummary/datasourcedescriptions.html">Data Source Descriptions</a>
                <a href="./dataSummary/shodan.html">Data Source: Shodan</a>
                <a href="./dataSummary/darknetmarkets.html">Data Source: Dark Net Markets</a>
                <a href="./dataSummary/darknetforums.html">Data Source: Dark Net Forums</a>
                <a href="./dataSummary/urlhaus.html">Data Source: URLHaus</a>
                <a href="./dataSummary/datasourcesummary.html">Data Source Summary</a>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropbtn">Data Example
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./dataExample/shodan.html">Shodan</a>
                <a href="./dataExample/darknetmarketsproduct.html">Dark Net Markets: Product</a>
                <a href="./dataExample/darknetmarketsseller.html">Dark Net Markets: Seller</a>
                <a href="./dataExample/darknetforumsilkroad.html">Dark Net Forums: Silkroad</a>
                <a href="./dataExample/darknetforumswallstreet.html">Dark Net Forums: Wallstreet</a>
                <a href="./dataExample/urlhaus.html">URL Haus</a>
            </div>
        </div>
        <div class="dropdown">
        <button class="dropbtn">Analytics
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="./analytics/analyticapproach.html">Analytic Approach</a>
            <a href="./analytics/textminingwordfrequency.html">Text Mining Word Frequency</a>
            <a href="./analytics/reputationservices.html">Reputation Services</a>
            <a href="./analytics/textminingthreatactors.html">Text Mining Key Words Prominent Threat Actors</a>
            <a href="./analytics/retailportanalysis.html">Retail Port Analysis</a>
        </div>
    </div>
    <div class="dropdown">
            <button class="dropbtn">Operational Intelligence
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="./operationalIntelligence/keyinsights.html">Key Insights and Intelligence Summary</a>
            </div>
        </div>

        <div class="dropdown">
        <button class="dropbtn">References
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
            <a href="./references/ctiprocess.html">CTI Process Info</a>
            <a href="./references/references.html">Document References</a>
        </div>
    </div>
            <a href="aboutus.html">About Us</a>
    </div>
</html> 
`

window.onload = () => {
    const navBar = document.createElement('div');
    navBar.innerHTML = navBarHtml;
    document.body.insertBefore(navBar, document.body.firstChild);
}