import { DotsThreeVertical } from '@phosphor-icons/react';
import { Tag } from './Tag';

import './TagList.css';
import './EditableTagList.css';

export const EditableTagList = () => {

  return (
    <div className="annotation-tag-list editable">
      <ul>
        <li className="more">Add a tag</li>
      </ul>

      <div className="actions">
        <DotsThreeVertical size={20} weight="bold" />
      </div>
    </div>
  )

}