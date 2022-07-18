import React from 'react';
import ReactDOM from 'react-dom/client';

//component

import Search from './Component/Search';
import Addinfo from './Component/Addinfo';
import AddAppointment from './Component/AddAppointment';

//source
import appointData from './data.json'
import './index.css';
import {BiArchive} from 'react-icons/bi'

function App(){
  return(
    <article>
      <h3>
        <BiArchive />예약시스템
        </h3>
      <AddAppointment />

      <Search/>

      <div id="list">
        <ul>
          {
            appointData.map( (item) => (
              <Addinfo
                key={item.id}
                appointment ={item}/>
            ))
          }
        </ul>
      </div>
  </article>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


