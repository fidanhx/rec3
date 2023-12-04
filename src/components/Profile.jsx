import React from 'react'
import Name from './Name';
import Email from './Email';
import Address from './Address';
import PersonalInfo from './PersonalInfo';
import './Profile.css';
const profile = () => {
  return (
    <div>
        <Name name = 'Aylin Rəcəbli'/>
        <hr/>
        <Email email = 'aylinrajabli@gmail.com'/>
        <hr/>
        <Address  address='Bakı, Azərbaycan'/>
        <hr/>
        <PersonalInfo personalInfo='Mən rəqəmsal təcrübələr yaratmaq üçün dərin 
        maraqla idarə olunan bir veb tərtibatçısıyam. Mənim veb-inkişafına 
        səyahətim ideyaları interaktiv, funksional veb-saytlara çevirmək 
        həvəsindən qaynaqlandı.'/>

    </div>
  )
}

export default profile