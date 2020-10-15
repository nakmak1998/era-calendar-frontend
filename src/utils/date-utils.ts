
import getWeek from 'date-fns/getWeek';


export const weekDays:string[]=[
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс"
];


export function getRussianWeekDayNumber(date:Date):number{
    const resultWeekDay=getWeek(date,{
        weekStartsOn:1
    });
    return resultWeekDay;
}


export function getFirstWeekDayMonth(date:Date):number{
    const year=date.getFullYear();
    const month=date.getMonth();
    const firstDate=new Date(year,month,1);
    return getRussianWeekDayNumber(firstDate);
}
