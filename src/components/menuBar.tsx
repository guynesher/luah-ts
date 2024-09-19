import '@aws-amplify/ui-react/styles.css';
import { Divider, Flex, Menu, MenuButton, MenuItem, Text } from '@aws-amplify/ui-react';
import { VscAccount } from 'react-icons/vsc';
import { useAppSelector } from '../store/hooks';
import { selectUser } from '../reducers/userSlice';

interface BackToParent {
  setValue: (value: string) => void;
  contents: (string | null)[];
  current: (string);
  trig: (boolean);
}

const MenuBar: React.FC<BackToParent> = ({ setValue, contents, trig, current}) => {
  const user = useAppSelector(selectUser)
  const trigger=trig?(
    <MenuButton size="large" width="100%" className="btn">
      <VscAccount size={'40px'} color={user.id!==""?'#6bfc03':'#fc0303'}/>
      <Text color={user.id!==""?'#6bfc03':'#fc0303'} padding={'5px'}>{current}</Text>
    </MenuButton>
  ):(null) 
  
  return (
    <Flex direction="row" justifyContent="flex-start">
      <Menu
          menuAlign="start"
          size="large"
          alignItems={'center'}
          margin="5px"
          backgroundColor="purple.20"
          trigger={trigger}
      >
      {contents&& contents.map((content, index) =>
        content?<MenuItem key={"item"+index} onClick={() => setValue(content)} 
                    color="purple.90" style={{background: "hsl(300, 85%, 85%)"}}>
          {content}
        </MenuItem> :<Divider key={"div"+index}/>
        )}
      </Menu>
    </Flex>
  )
}
 
export default MenuBar;