const YANDEX_RSS_URL = 'https://news.yandex.ru/science.rss';

async function downloadXml(url) {
    const response = await fetch(url);
    return await response.text();
}

const getDocument = (text) =>  {
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/xml');
}

const extractNews = (doc) => {
    const items = doc.getElementsByTagName('item');
    const news = [];
    items.forEach(item => {
        news.push({
            title: item.getElementsByTagName('title')[0],
            link: item.getElementsByTagName('link')[0],
            description: item.getElementsByTagName('description')[0],
            pubDate: item.getElementsByTagName('pubDate')[0],
        })
    });
    return news;
}

async function getNews() {
    try {
        const xml = await downloadXml(YANDEX_RSS_URL);
        const doc = getDocument(xml);
        return extractNews(doc);
    } catch (error) {
        console.log(error);
    }
}
