import { DotsThreeVertical } from '@phosphor-icons/react';
import { Tag } from './Tag';

import './TagList.css';

export const TagList = () => {

  return (
    <div className="annotation-tag-list">
      <ul>
        <li>
          <Tag>Person</Tag>
        </li>

        <li>
          <Tag>Important</Tag>
        </li>

        <li>
          <Tag>MyTag</Tag>
        </li>

        <li className="more">+3 more</li>

      </ul>

      <div className="actions">
        <DotsThreeVertical size={20} weight="bold" />
      </div>
    </div>
  )

}