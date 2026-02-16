import React, { useContext } from 'react';
import { MyContext } from '../utils/ContextProvider';

const TransText = (props) => {

    const [dark, setDark,skills,projects, selectedLanguage, setSelectedLanguage, savedSelectedLanguage] = useContext(MyContext);    

    return props[selectedLanguage];

};

export default TransText;