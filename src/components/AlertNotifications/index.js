import {MdWarning, MdInfo} from 'react-icons/md'

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const tharun = () => (
    <Notification>
      <div>
        <div className="successContainer">
          <AiFillCheckCircle className="success1" />
          <div className="commonContainer">
            <h1 className="success">success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  const tharun1 = () => (
    <Notification>
      <div>
        <div className="successContainer">
          <RiErrorWarningFill className="Error1" />
          <div className="commonContainer">
            <h1 className="Error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  const tharun2 = () => (
    <Notification>
      <div>
        <div className="successContainer">
          <MdWarning className="Warning1" />
          <div className="commonContainer">
            <h1 className="Warning">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  const tharun3 = () => (
    <Notification>
      <div>
        <div className="successContainer">
          <MdInfo className="Info1" />
          <div className="commonContainer">
            <h1 className="Info">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="center">
      <h1 className="heading">Alert Notifications</h1>
      {tharun()}
      {tharun1()}
      {tharun2()}
      {tharun3()}
    </div>
  )
}
export default AlertNotifications
