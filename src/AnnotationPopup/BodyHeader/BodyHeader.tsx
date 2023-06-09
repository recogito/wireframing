import { Avatar } from '../Avatar';
import { DotsThreeVertical } from '@phosphor-icons/react';

import './BodyHeader.css';

export const BodyHeader = (props: { user: string }) => {

  return (
    <div className="annotation-body-header">
      <Avatar
        id={props.user}
        name={props.user} />

      <div>
        <address>
          {props.user}
        </address>

        <div className="annotation-body-created-at">
          <time>2 weeks ago</time>
        </div>
      </div>

      <div className="actions">
        <DotsThreeVertical size={20} weight="bold" />
      </div>
    </div>
  )

}