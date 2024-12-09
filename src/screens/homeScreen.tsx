import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectActiveStatus } from "../reducers/misSlice";
import { Card, Flex, Grid, Text } from "@aws-amplify/ui-react";
import { Header } from "../components/Header";
import Access from "../components/accessibility";

function HomeScreen() {
  const activeStt = useAppSelector(selectActiveStatus)
  const navigate=useNavigate()
  console.log(activeStt)
  //DB connections: 
  //Listen to Recoms --> List Recommandations best and last first
  //Create Recommandations (if registered)
  //Create contact

  return (
        <Flex direction={"column"}>
          <Header></Header>
          <Access></Access>
          <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 3fr 1fr"
        >
          <Card 
            columnStart="1"
            columnEnd="-1"
            backgroundColor="orange.20"
          >
            <Text     
              variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="2em"
              fontStyle="normal"
              textDecoration="none"
              width="70vw"
              color={"purple.100"}>
                   דף הבית 
            </Text>
      <button onClick={()=>navigate('/Courses')}>Courses Screen</button>
      <button onClick={()=>navigate('/LandingPage')}>Landing Page</button>
          </Card>
          </Grid>
        </Flex> 
  );
}

export default HomeScreen;