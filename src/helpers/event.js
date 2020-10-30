import eventSrc from '../../assets/event150.png';

export async function downloadHtml(url) {
    let response = await fetch(url, {mode:'cors'});
    return await response.text()
}

export const getDocument = (text) => {
    const parser = new DOMParser();
	return parser.parseFromString(text, 'text/html');
};

export const extractEvents = (text) => {
    const document = getDocument(text);
    const cards = document.querySelectorAll('a.event_card');
    let events = [];
    cards.forEach((card)=>{
            events.push({
                //image: ...
                // type: card.querySelector('.event_type').innerText,
                title: card.querySelector('h1').innerText,
                /*date: card.querySelector('.event_date').innerText,*/
                date: card.querySelector('.event_date').innerText,
                time: card.querySelector('.event_time').innerText,
            });
    });

    return events;
};

export async function getEvents(time = 'future') {
    const URL = `https://www.era-tehnopolis.ru/events/?time=${time}`;
    const DEFAULT_PAST_EVENTS = [
        {
            imgUrl: eventSrc,
            title: 'II Всероссийская научно-техническая конференция «Состояние и перспективы развития современной науки по направлению «Технологии энергообеспечения. Аппараты и машины жизнеобеспечения»',
            date: '17 сентября 2020г.',
            time: '10:00 - 17:30',
        },
        {
            imgUrl: eventSrc,
            title: 'V Военно-научная конференция "Роботизация Вооруженных Сил Российской Федерации"',
            date: '29 июля 2020г. - 30 июля 2020г.',
            time: '9:00 - 17:00',
        },
        {
            imgUrl: eventSrc,
            title: 'II Всероссийская научно-техническая конференция «Состояние и перспективы развития современной науки по направлению «АСУ, информационно-телекоммуникационные системы»',
            date: '18 июня 2020г.',
            time: '9:00 - 17:40',
        },
    ];

    const DEFAULT_FUTURE_EVENTS = [
        {
            imgUrl: eventSrc,
            title: 'II Научно-техническая конференция «Состояние и перспективы развития современной науки по направлению «Техническое зрение и распознавание образов»',
            date: '22 октября 2020г.',
            time: '10:00 - 17:00',
        },
    ];


    try {
        const html = await downloadHtml(URL);
        return extractEvents(html);
    } catch (error) {
        console.log(error)
        return time === 'past' ? DEFAULT_PAST_EVENTS : DEFAULT_FUTURE_EVENTS;
    }
}


