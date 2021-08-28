import React from 'react';
import styles from "./footer.module.css";
import {love} from '../../components/assests/svg/import_svg'

function Footer(){
  return(
    <div className = {styles.container}>
      Made with <img src = {love.src.default} alt = 'A love symbol' className = {styles.pic}/> by eiden
    </div>
  )
}

export default Footer;