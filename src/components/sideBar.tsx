import React, { useEffect, useState } from 'react';
//import MenuBar from './menuBar';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { setActiveStatus } from '../reducers/misSlice';
import SpecialMenuBar from './specialMenuBar';

const Sidebar: React.FC = () => {
    const [value, setValue] = useState<string>();
    const navigate=useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(value==="צור קשר") { dispatch(setActiveStatus("contact"));navigate ("/") }
        if(value==="המלצות") { dispatch(setActiveStatus("recom"));navigate ("/") }
        if(value==="שירים וסרטונים") { dispatch(setActiveStatus("songs"));navigate ("/") }
        if(value==="התוכנית") { dispatch(setActiveStatus("theProgram"));navigate ("/") }
        if(value==="קצת עלינו") { dispatch(setActiveStatus("about"));navigate ("/") }
      }, [value]);

  return (
    <div className='sidebar'>
        <SpecialMenuBar setValue={setValue} alig='flex-end'
                contents={["BtnAlynu","BtnProgram","BtnShirim","BtnRec","BtnContact"]}
                audioContents={["BtnAlynu","BtnProgram","BtnShirimNew","BtnRec","BtnContact"]}
                names={["קצת עלינו","התוכנית","שירים וסרטונים","המלצות","צור קשר"]}  
                segments={[[0,90,10,80,0,90],[0,149,15,90,0,149],[0,120,0,120,0,120],[37,135,37,135,37,135],[0,80,28,82,0,80]]}/>
        </div>
  );
};

export default Sidebar;
//[1, 1, 3,"btn", [["17%","17%","35%","5%"],[]], "BtnShirimNew", [true,true,"BtnShirim",[false,true,false],[[0,120],[0,120],[0,120]],"BtnShirimNew"]],
