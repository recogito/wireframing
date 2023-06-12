import { Trash } from '@phosphor-icons/react';
import { ReplyForm } from './ReplyForm';
import { EditableTagList } from './TagList';

import './AnnotationPopup.css';
import './EmptyPopup.css';

export const EmptyPopup = () => {

  return (
    <div className="container">
      <div className="annotation-popup empty">
        <EditableTagList />
        <ReplyForm placeholder="Comment..." />
      </div>

      <button className="anno-desktop-overlay delete">
        <Trash size={18} />
      </button>
    </div>
  )

}