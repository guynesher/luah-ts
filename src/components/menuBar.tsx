import '@aws-amplify/ui-react/styles.css';
import { Divider, Flex, Menu, MenuButton, MenuItem, Text, View } from '@aws-amplify/ui-react';
import { VscAccount, VscAdd, VscEdit } from 'react-icons/vsc';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectUser } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { setActiveStatus, setCurrentProfileName, setCurrentProfileNum } from '../reducers/misSlice';

interface BackToParent {
  setValue: (value: string) => void;
  contents: (string | null)[];
  current: (string);
  trig: (boolean);
}

const MenuBar: React.FC<BackToParent> = ({ setValue, contents, trig, current}) => {
  const user = useAppSelector(selectUser)
  //const profile=useAppSelector(selectProfile)
  const dispatch = useAppDispatch()

  const trigger=trig?(
    <MenuButton size="large" width="100%" className="btn">
      <VscAccount size={'40px'} color={user.id!==""?'#6bfc03':'#fc0303'}/>
      <Text color={user.id!==""?'#6bfc03':'#fc0303'} padding={'5px'}>{current}</Text>
    </MenuButton>
  ):(null) 
  const navigate=useNavigate()

  return (
    <Flex direction="row" justifyContent="flex-start">
      <Menu
          id="headerMenu" aria-label="תפריט מקוצר"
          menuAlign="start"
          size="large"
          alignItems={'center'}
          margin="5px"
          backgroundColor="purple.20"
          trigger={trigger}
      >
      {contents&& contents.map((content, index) =>
        content?<MenuItem key={"item"+index} onClick={() => {
          setValue(content);
          if(content!=="הגדרות" && content!=="ניהול חשבון" && content!=="יציאה" && content!=="צור קשר" && 
              content!=="המלצות" && content!=="שירים וסרטונים" && content!=="התוכנית" && content!=="קצת עלינו" && 
              content!=="הוספת פרופיל"){
                dispatch(setActiveStatus("Update"))
                dispatch(setCurrentProfileNum((index+1).toString()))
                dispatch(setCurrentProfileName(content))
              }
        }} 
                    color="purple.90" style={{background: "hsl(300, 85%, 85%)"}}>
          {(content!=="הגדרות" && content!=="ניהול חשבון" && content!=="יציאה" && content!=="צור קשר" && 
            content!=="המלצות" && content!=="שירים וסרטונים" && content!=="התוכנית" && content!=="קצת עלינו") && 
                <View
                  as="span"
                  ariaLabel="View example"
                  backgroundColor="hsl(300, 85%, 85%)"
                  color="var(--amplify-colors-blue-60)"
                  height="3.2rem"
                  maxWidth="100%"
                  padding="1rem"
                  width="7rem"
                  onClick={()=>{
                    dispatch(setActiveStatus(content==="הוספת פרופיל"?"Create":"Update"));
                    navigate ("/profileSettings")}
                  }
                  >{content==="הוספת פרופיל"?<VscAdd/>:<VscEdit /> }
                </View>    
              }
              {content} 
        </MenuItem> :<Divider key={"div"+index}/>
        )}
      </Menu>
    </Flex>
  )
}
 
export default MenuBar;