import { Grid, View, useTheme, Flex, Button, Image, } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import MenuBar from './menuBar';

export const Header = () => {
  const { tokens } = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState<string>();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid
      templateColumns=" 1fr"
      templateRows=" 4rem"
      gap={tokens.space.small}
    >
    <View
        alignSelf={'center'}
        padding="1rem"
        boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
        color='white'
        backgroundColor='purple.20'
    >      
        <Flex direction="row" justifyContent="space-between" paddingTop="1rem">
            <Image
                alt="logo"
                src="/src/assets/Logo.png"
                height="50px"
                width="65px"
                opacity="100%"
                />
            <MenuBar setValue={setValue} contents={["פרופיל 1","פרופיל 2",null,"הגדרות","ניהול חשבון",null,"יציאה"]} 
                    trig={true} current={value?value:""}/>
            {width>720 && 
                <>
                <Button className="btn">קצת עלינו</Button>
                <Button className="btn">התוכנית</Button>
                <Button className="btn">המלצות </Button>
                <Button className="btn">צור קשר</Button>
                <Button className="btn">שירים וסרטונים </Button>
                </>
            }
            <MenuBar setValue={setValue} contents={["קצת עלינו","התוכנית","שירים וסרטונים",null,"המלצות","צור קשר"]} 
                    trig={false} current="גיא"/>
        </Flex>
    </View>
    </Grid>
  );
};
