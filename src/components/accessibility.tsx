import { Accessibility } from 'accessibility';
import './access.css'

interface Labels {
    resetTitle: string;
    closeTitle: string;
    menuTitle: string;
    increaseText: string;
    decreaseText: string;
    increaseTextSpacing: string;
    decreaseTextSpacing: string;
    increaseLineHeight: string;
    decreaseLineHeight: string;
    invertColors: string;
    grayHues: string;
    underlineLinks: string;
    bigCursor: string;
    readingGuide: string;
    textToSpeech: string;
    speechToText: string;
    disableAnimations: string;
    hotkeyPrefix: string;
}

interface Options {
    labels: Labels;
    //icon: { img: string[] };
    textToSpeechLang: string;
    speechToTextLang: string;
}

const labels: Labels = {
    resetTitle: 'אתחל',
    closeTitle: 'סגור',
    menuTitle: 'נגישות',
    increaseText: 'הגדל גופן',
    decreaseText: 'הקטן גופן',
    increaseTextSpacing: 'הגדל מרווח טקסט',
    decreaseTextSpacing: 'הקטן מרווח טקסט',
    increaseLineHeight: 'הגדל גובה שורה',
    decreaseLineHeight: 'הקטן גובה שורה',
    invertColors: 'החלף ניגודיות צבע',
    grayHues: ' שחור לבן',
    underlineLinks: 'הגדש קישורים',
    bigCursor: 'הגדל סמן',
    readingGuide: 'קו מנחה קריאה',
    textToSpeech: 'טקסט לדיבור',
    speechToText: 'דיבור לטקסט',
    disableAnimations: 'עצור אנימציות',
    hotkeyPrefix: 'קיצור'
};

const options: Options = {
    labels: labels,
    //icon: { img: ['accessible'] },
    textToSpeechLang: 'he', // or any other language
    speechToTextLang: 'he' // or any other language
};

window.addEventListener('load', () => { new Accessibility(options); }, false);

function Access() {
    return(<></>)
}

export default Access;