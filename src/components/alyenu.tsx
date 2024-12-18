import React from 'react';
import { Flex, View } from '@aws-amplify/ui-react';
import DataLottieCard from './dataLottieCard';

interface ScreenSize {
  width: number;
  height: number;
}

const Aleynu: React.FC<ScreenSize> = ({}) => {

  return (
        <View color={"blue.80"} width="100%">
          <br></br>
          <Flex direction={'row' } 
              width="100%" 
              wrap={"wrap"} 
              justifyContent="center"
              alignItems="center">
          <DataLottieCard name="aBike" data="aBike" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="30%" height="30%" heading='הנאה מתוך למידה'
                mainText='מלווה בשירים וסיפורים ודמויות מצוירות המסבירות את הנושא ומלוות את התרגילים שאף הן בעצם משחקים ולא דפי עבודה רגילים'/>     
          <DataLottieCard name="aTaky" data="aTaky" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="30%" height="30%" heading='יחס אישי לכל ילד'
                mainText='מורים פרטיים מצוירים ב"גילם" של הילדים המסבירים כל טעות ועוזרים לילד להתקדם בקצב שלו ולא מסתפקים בחיווי בלבד'/> 
          <DataLottieCard name="aTanin" data="aTanin" audioData="BtnAlynu" segments={[20,30,70,80,0,120]} 
                  width="30%" height="30%" heading='מונגש לילדים מתחת לגיל קריאה'
                  mainText='כל הכפתורים באתר מדברים ומסבירים כך שלא דרושה נוכחות מבוגר'/>   
          <DataLottieCard name="aMashroom" data="aMashroom" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="30%" height="30%" heading='  צוות חינוך מנוסה'
                  mainText="תוכנית המכינה את הילד על פי תוכנית הליבה של משרד החינוך. תוכנית שנולדה מתוך הכרת הקשיים מולם עומדים הילדים וההורים בכיתה א'. "/>           
          <DataLottieCard name="aFish" data="aFish" audioData="BtnAlynu" segments={[50,80,10,80,0,120]} 
                  width="30%" height="30%" heading="הכנה רגשית לכיתה א'"
                  mainText="הילד ילמד איך לחשוב, לפתור בעיות ולהגיע לבגרות הרגשית הדרושה בכיתה א'"/>           
          <DataLottieCard name="aInstrument" data="aInstrument" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="30%" height="30%" heading='רכישת מיומניות טרום קריאה, ומוטוריקה עדינה'
                  mainText='למוד הבחנה בין דמות לרקע, מיקום במרחב, כיוונים וחריזה וכן כישורי שימוש בעכבר. ובכלל הפיכת זמן המחשב לזמן איכות.'/>           
          </Flex>
         </View>
  );
};

export default Aleynu;
