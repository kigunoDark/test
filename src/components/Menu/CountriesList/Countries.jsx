import React from 'react';
import c from './Countries.module.css'
const Countries = (props) => {
  return (
    <div className={c.countries}>
    <h3 className={c.title}>Страны</h3>
      <ul className={c.list}>
        {props.countries.map((c, i) => 
          <li key={i} className={c.list_item}><a>{c.country}</a></li>)}
      </ul>
  </div>
  )
}

export default Countries;