import './index.css'

import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="successContainer1">
      {children}
      <GrFormClose className="tharun" />
    </div>
  )
}

export default Notification
