import {BiTrash} from 'react-icons/bi'

function Addinfo({appointment}){
  return(
 
    <li>
      <dl>
        <dt>{appointment.petName}</dt>
        <dd className='owner'>
          <dfn>예약자명</dfn>
           {appointment.owenrName}
          </dd>
        <dd className='desc'>
          {appointment.aptNotes}
        </dd>
        <dd className='data'>
          {appointment.aptDate}
        </dd>
      </dl>

      <p>
        <button type="button">
          <BiTrash />
        </button>
      </p>
    </li>
    
  )
}

export default Addinfo