import { Avatar } from '../Avatar';

import './BodyHeader.css';

export const BodyHeader = () => {

  return (
    <div className="annotation-body-header">
      <Avatar
        id="aboutgeo"
        name="aboutgeo" />

      <div>
        <address>
          aboutgeo
        </address>

        <div className="annotation-body-created-at">
          <time>2 weeks ago</time>
        </div>
      </div>
    </div>
  )

}