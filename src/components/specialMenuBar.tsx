import '@aws-amplify/ui-react/styles.css';
import { Divider, Flex, Menu, MenuItem } from '@aws-amplify/ui-react';
import SmallCard from './smallCard';

interface BackToParent {
  setValue: (value: string) => void;
  contents: (string | null)[];
  audioContents: string[];
  names: string[];
  segments: number[][];
  alig: string;
}

const SpecialMenuBar: React.FC<BackToParent> = ({ setValue, contents, audioContents,segments, names, alig}) => {
  //const profile=useAppSelector(selectProfile)
  //const dispatch = useAppDispatch()

  return (
    <Flex direction="row" justifyContent="flex-start">
      <Menu
          menuAlign="center"
          size="large"
          alignItems={alig}
          margin="5px"
          //width={"400px"}
          borderColor={"transparent"}
          backgroundColor={"transparent"}
          boxShadow={"none"}
      >
      {contents&& contents.map((content, index) =>
        content?<MenuItem key={content+index} onClick={() => {setValue(names[index])}} 
                    style={{background: "hsl(300, 85%, 85%)", width: "90px", height:"90px"}}>
              <SmallCard name={content} data={content} audioData={audioContents[index]} 
              segments={segments[index]} width="70px" height="70px" setValue={setValue}></SmallCard> 
        </MenuItem> :<Divider key={"div"+index}/>
        )}
      </Menu>
    </Flex>
  )
}
 
export default SpecialMenuBar;