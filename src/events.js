async function downloadHtml(url) {
    let resposnse = await fetch(url);
    return await resposnse.text()
};
const getDocument = (text) => {
    const parser = new DOMParser();
	return parser.parseFromString(text, 'text/html');
};
const extractEvents = (text) => {
    const document = getDocument(text);
    let cards = document.querySelectorAll('a.event_card');
    let events = []
    for (let [key, card] of Object.entries(cards)) {
        events.push({
            //image: ...
            // type: card.querySelector('.event_type').innerText,
            title: card.querySelector('h1').innerText,
            date: card.querySelector('.event_date').innerText,
            time: card.querySelector('.event_time').innerText,
        });
    }

    return events
};

const url = 'https://www.era-tehnopolis.ru/events/?time=future';
const defaultEvents = [
    {
        title: 'II Всероссийская научно-техническая конференция «Состояние и перспективы развития современной науки по направлению «Технологии энергообеспечения. Аппараты и машины жизнеобеспечения»',
        date: '17 сентября 2020г.',
        time: '10:00 - 17:30',
    },
    {
        title: 'V Военно-научная конференция "Роботизация Вооруженных Сил Российской Федерации"',
        date: '29 июля 2020г. - 30 июля 2020г.',
        time: '9:00 - 17:00',
    },
    {
        title: 'II Всероссийская научно-техническая конференция «Состояние и перспективы развития современной науки по направлению «АСУ, информационно-телекоммуникационные системы»',
        date: '18 июня 2020г.',
        time: '9:00 - 17:40',
    },
]

async function getEvents() {
    try {
        const html = await downloadHtml(url);
        const events = getEvents(html);
        return events;
    } catch (error) {
        console.log(error)
        return defaultEvents;
    }
}

