import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="container-card">
      {children}
      <GrFormClose />
    </div>
  )
}

export default Notification
