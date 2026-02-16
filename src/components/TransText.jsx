import { useContext } from 'react';
import { MyContext } from '../utils/ContextProvider';

const TransText = (props) => {

    const [selectedLanguage] = useContext(MyContext);    

    return props[selectedLanguage];

};

export default TransText;