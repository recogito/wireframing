import { Tag } from '@phosphor-icons/react';

import './TagList.css';
import './EditableTagList.css';

export const EditableTagList = () => {

  return (
    <div className="annotation-tag-list editable">
      <ul>
        <li className="more"><Tag size={14} weight="bold" />Click to add tags...</li>
      </ul>
    </div>
  )

}