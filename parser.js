async function downloadHtml(url) {
    let resposnse = await fetch(url);
    return await resposnse.text()
};
const getDocument = (text) => {
    const parser = new DOMParser();
	return parser.parseFromString(text, 'text/html');
};
const getEvents = (text) => {
    const document = getDocument(text);
    let cards = document.querySelectorAll('a.event_card');
    let events = []
    for (let [key, card] of Object.entries(cards)) {
        events.push({
            type: card.querySelector('.event_type').innerText,
            title: card.querySelector('h1').innerText,
            date: card.querySelector('.event_date').innerText,
            time: card.querySelector('.event_time').innerText,
        });
    }

    return events
};
const url = 'https://www.era-tehnopolis.ru/events/?time=past';

async function run() {
    try {
        const html = await downloadHtml(url);
        const events = getEvents(html);
        console.log(events)
    } catch (error) {
        console.log(error)
    }
}

