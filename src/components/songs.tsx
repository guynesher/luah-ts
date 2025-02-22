import React, { useEffect, useState } from 'react';
import { Accordion, Flex, Text, View } from '@aws-amplify/ui-react';
import DataLottieCard from './dataLottieCard';
//import ReactPlayer from 'react-player';

interface ScreenSize {
  width: number;
  height: number;
}

const Songs: React.FC<ScreenSize> = ({width}) => {
  const [vid,setVid]=useState<string>('KidPYQmKbvw')

    useEffect(() => {
      let video = document.getElementById('video2');
      if(video) video.setAttribute("src", `https://dw9m3ez1dxtsh.cloudfront.net/${vid}.mp4?autoplay=0`);
        //console.log(vid)
    }, [vid]);  

  return (
      <Flex direction={'column'}>
        <View color={"blue.80"} width="100%">
          <br></br>
          <View color={"blue.80"} width="100%">
          <Text     variation="primary" as="h2" color={"blue.80"} width="100%"
            lineHeight="2.5em" fontWeight={"bold"} fontSize="2em" fontStyle="normal">לו"ח לומדים וחושבים </Text>
          <Text     variation="primary" as="h3" color={"blue.80"} width="100%"
            lineHeight="2.5em" fontWeight={"bold"} fontSize="1.5em" fontStyle="normal">מיזם חדשני לגילאי 4-6 המלמד קריאה בהנאה ובכיף </Text>
          <Text     variation="primary" as="h4" color={"blue.80"} width="100%"
            lineHeight="2.5em" fontWeight={"bold"} fontSize="1.5em" fontStyle="normal">הנה עוד כמה דוגמאות להמחשה  </Text>
          </View>
          <Flex direction={'row' } 
              width="100%" 
              wrap={"wrap"} 
              justifyContent="center"
              alignItems="center">
                <div onClick={()=>setVid("0E5cdiWc9k0")} className='card'>
          <DataLottieCard name="aValleybball" data="aValleybball" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="70%" height="20%" heading='תוכנית המתאימה עצמה לילד' cardWidth="300px" cardHeight="200px"
                mainText='התוכנית שלנו'/>  
                </div>   
                <div onClick={()=>setVid("KidPYQmKbvw")} className='card'>
          <DataLottieCard name="aTennis" data="aTennis" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="70%" height="20%" heading='בליווי שירים קליטים ומקוריים' cardWidth="300px" cardHeight="200px"
                mainText='שיר התוכנית שלנו'/> 
                </div>   
                <div onClick={()=>setVid('gRuT8gNjF14')} className='card'>
          <DataLottieCard name="aBasketball" data="aBasketball" audioData="BtnAlynu" segments={[20,30,70,80,0,120]} 
                  width="25%" height="20%" heading='מורים מצוירים בגילם של הילדים' cardWidth="300px" cardHeight="200px"
                  mainText='סיפור רקע לכל שיעור'/> 
                </div>   
                <div onClick={()=>setVid("m9vZQ8XijIY")} className='card'>
          <DataLottieCard name="aMiskolot" data="aMiskolot" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="50%" height="20%" heading='מן היסוד ועד קריאה מלאה'
                  cardWidth="300px" cardHeight="200px"
                  mainText='שיעור טרום קריאה כדוגמא'/>  
                </div>   
          </Flex>
         </View>
          <View  alignSelf={"center"}>
          {vid && 
              <video width={(width && width<400)?width:width*.7} id="video2"
                  height={(width && width<400)?width:width*.45} //poster="https://dw9m3ez1dxtsh.cloudfront.net/MainPic.png"
                  controls loop={false} autoPlay={false} controlsList="nodownload">
                <source src={`https://dw9m3ez1dxtsh.cloudfront.net/${vid}.mp4?autoplay=0`} type='video/mp4'>
                </source>
              </video>
              // <ReactPlayer
              // url={`https://youtube-nocookie.com/embed/${vid}?autoplay=0`}
              // playing={false}
              //   loop={false}
              //   controls={true}
              //   width={(width && width<400)?width:width*.7}
              //   height={(width && width<400)?width:width*.45}
              // />
              }
          </View>


          <View color={"blue.80"} width="100%">
          <h2>  שאלות ותשובות  </h2>
          </View>
          <Flex direction={'row' } 
              width="100%" 
              wrap={"wrap"} 
              justifyContent="center"
              alignItems="center">
          <Accordion width={{small:"100%",large:"50%"}} backgroundColor={"orange.10"} color={"blue.80"} 
                fontSize={"1.2rem"} fontWeight={"bold"}
                items={[
                {
                  trigger: 'כמה זה עולה?',
                  value: 'shut1_100',
                  content: 'המנוי בתוקף לשנה. כרגע אנו במבצע ל-300 נרשמים ראשונים ומחיר המנוי הוא 50 ש"ח בלבד (במקום 199 ש"ח)'
                },
                {
                trigger: 'האם התוכנית מוגבלת בזמן?',
                value: 'shut1_1',
                content: 'המנוי בתוקף לשנה. ברגע שתהליך ההרשמה והתשלום מתבצעים, נפתחת אפשרות להכנס לתוכנית עבורה שילמת. תוכל לחזור תמיד ליחידות שכבר השלמת ואפילו בסוף התוכנית יש אפשרות להתחיל אותה מהתחלה'
                },
                {
                trigger: 'לאילו גילאים התוכנית מתאימה?',
                value: 'shut1_2',
                content: 'התוכנית מתאימה לכל ילד שמתכונן לעלות לכיתה א, לכן רב הילדים שילמדו בתוכנית יהיו בגילאי 4-5. בכל זאת חשוב לדעת שהתוכנית מתחילה מיסודות קדם קריאה עד לקריאה מילים שלמות, כל שלב בנוי על השלב הקודם, לכן התוכנית יכולה להיות מתאימה גם לילדים בסוף כיתה א, או בכיתה ב, שעדיין לא רכשו את שטף קריאה ברמה המספיקה להתקדמות תקינה בכיתה, או כאלה שיסוד קריאה מסוים לא יושב אצלם טוב'
                },
                {
                  trigger: 'בטוח שאחרי הקרס הזה הילד ידע לקרוא?',
                  value: 'shut1_4',
                  content: 'רכישת קריאה הוא תהליך הכולל הרבה גורמים. כולל גורמים אנושיים שונים. הצלחתו של הילד תלויה לא רק בקורס. אנחנו השתדלנו לבנות את הקורס בצורה  כמה שיותר מובנת והדרגתית ולקחנו בחשבון מה יכולים להיות הקשיים בכל יחידת לימוד. בנוסף אנחנו מנסים תמיד לשפר את התוכנית לפי הצורך של הילד, נשמח גם לקבל עזרה מכם ולדווח לנו על קושיים שחווה ילדיכם כדי שנוכל להמשיך לדייק בבניית התוכנית'
                },
                {
                  trigger: 'למה צריך בכלל קורס הכנה לכיתה א?',
                  value: 'shut1_5',
                  content: 'זה כמובן לא חובה, שכן, תוכנית הליבה של משרד החינוך בגן חובה, כוללת נושאים שמכינים את הילד לכיתה א. עם זאת, במעבר לכיתה א יכול להיות גם קושי רגשי, ולכן, הילד לא תמיד פנוי ללמידה באופן מלא. בנוסף, רב כיתות הלימוד בארץ כוללות מספר רב של ילדים בכל מיני רמות. הלמידה בכיתה מתנהלת על פי הרמה הבינונית וצמיד ישנם ילדים שנשארים מאחור ולבתי ספר יש מעט משאבים לקדם אותם. הקורס מנסה לעזור לילד להגיע מוכן לכיתה א כדי שחלק מהעומס הרגשי יחסך לו'
                },
                {
                  trigger: 'מדוע חייבים קורס דיגיטלי לא מספיק לרכוש חוברות קיץ רגילות?',
                  value: 'shut1_6',
                  content: 'בקורס דיגיטלי קיימים אלמנטים שלא יכולים להיות בחוברת. אצלנו למשל, הילדים יכולים ללמוד דרך סרטוני אנימציה בהם שתי דמויות מצוירות מסבירות בתחילת כל יחידה את הנושא, אחר כך הן מדגימות ומסבירות מה לעשות בכל משחק, שהוא בעצם התרגיל הקשור לנושא. בנוסף, הדמויות גם מסבירות לילד כאשר הוא טועה - למה הוא טעה, ועוזרות לו לפתור את התרגיל'
                },
                {
                  trigger: 'מה ההבדל בין הקורס הזה למה שכבר קיים בשוק?',
                  value: 'shut1_7',
                  content: 'ישנם כמה הבדלים: קודם כל הקורס ברמה של הילד, מי שמלמד הן דמויות מצוירות, שהם בגיל של הילד וגם האתר מונגש לילד דרך כפתורים שמדברים .כמו כן, בקורס הזה הילד לומד כל פעם יחידת לימוד, ומתרגל אותה דרך משחקים.  "המורים", מלווים אותו במהלך המשחק והוא יכול לבקש מהם עזרה בכל שלב. כשהוא טועה, הם באים ומסבירים לו את הטעות ולא רק נותנים חיווי של תשובה לא נכונה. כך, שהילד מקבל כל הזמן יחס אישי כאילו נמצא לידו מורה אמיתי.בנוסף, האתר בנוי כך שהילד הוא עצמאי. לכן, הילד יכול להסתדר בעצמו בלי עזרתו של מבוגר (בדרך כלל). וכל זה במחיר של חוברת קיץ'
                },
                {
                  trigger: 'מה אני מקבל מהקורס?',
                  value: 'shut1_8',
                  content: 'הקורס הוא קורס מובנה המתחיל מרכישת יסודות טרום קריאה ומגיע עד לרמה של קריאת מילים שלמות. הילד מקבל יחס אישי על ידי שתי דמויות מצוירות, שהם גם המורים שלו. בתחילת כל יחידת לימוד הם מסבירים את הנושא, ובמהלך התרגילים הם מלווים את הילד, אם הוא צריך עזרה הם שם, ואם הוא עושה טעות הם מסבירים לו את טעותו.הילד מתקדם בקצב שלו, ותמיד הוא יכול לחזור ליחידה שהוא כבר למד, אם הוא מרגיש שהוא צריך עוד תרגול.בעזרת האנימציה האסטטית, כל תרגיל הוא כיף כך שהילד נהנה לשחק בו. כל יחידה בקורס מבוססת על היחידה הקודמת, כך שאין אפשרות לעבור ליחידה הבאה, אם לא מבינים טוב מה שנלמד ביחידה הקודמת' 
                }, 
                {
                  trigger: 'האם אפשר להכנס לקורס גם בפלאפון?',
                  value: 'shut1_3',
                  content: 'כן. אבל מומלץ להכנס דרך מחשב ביתי, שתומך בתוכנית טוב יותר '
                },
                {
                  trigger: 'כמה זמן לוקח לגמור את התוכנית?',
                  value: 'shut1_9',
                  content: 'תלוי בקצב של הילד. התוכנית בנויה כך, שהילד מתקדם בקצב שלו, כדי להפיק מהלמידה כמה שיותר תועלת. בגלל שהתוכנית היא לא רק אוסף של משחקים, אלא גם דורשת הבנה מצד הילד, סביר להניח שלא יצליח לשבת הרבה זמן. לכן, הוא יוכל להפסיק כשירצה בכך, ולהמשיך ביום אחר  מהנקודה בה הפסיק. הוא יוכל אפילו לחזור על היחידות שכבר למד אם הוא מרגיש צורך' 
                }, 
                {
                  trigger: 'רכשנו את התוכנית אבל הילד התחיל רק שיעור אחד ולא רוצה להמשיך. האם אפשר לקבל החזר כספי?',
                  value: 'shut1_10',
                  content: 'אפשר על פי תקנון האתר' 
                },  
                {
                  trigger: 'איפה אני יכולה למצוא הסבר על איך התוכנית פועלת כדי ללמד את הילד שלי?',
                  value: 'shut1_11',
                  content: 'באתר עצמו מופיע הסבר מלא של כל מה שקיים באתר ואיך נכנסים לכל מקום. בנוסף ההסבר מופיע גם לפני השיעור הראשון, אז אפשר לשבת עם הילד ולהסביר לו' 
                },  
                {
                  trigger: 'יש לי כמה ילדים בבית האם צריך לפתוח מנוי לכל אחד או שאפר מנוי אחד?',
                  value: 'shut1_12',
                  content: 'כדאי שלכל אחד יהיה מנוי, כי התוכנית בנויה כך, שכל פעם כשנכנסים לאתר היא מתחילה מהנקודה שהילד עצר בפעם הקודמת. מכיוון שבתוכנית שלנו לכל ילד יש אפשרות להתקדם בקצב שלו, אם יהיה מנוי אחד – זה לא יעבוד' 
                },              
                ]}
                />
          </Flex>
          <br></br>

        </Flex>
  );
};

export default Songs;
