async function getCovidStatistic() {
    const url = 'https://api.apify.com/v2/key-value-stores/1brJ0NLbQaJKPTWMO/records/LATEST?disableRedirect=true'
    let resposnse = await fetch(url);
    return await resposnse.json()
};