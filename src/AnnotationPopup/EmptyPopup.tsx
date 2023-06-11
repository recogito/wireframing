import { ReplyForm } from './ReplyForm';
import { EditableTagList } from './TagList';

import './AnnotationPopup.css';
import './EmptyPopup.css';

export const EmptyPopup = () => {

  return (
    <div className="annotation-popup empty">
      <EditableTagList />
      <ReplyForm placeholder="Comment..." />
    </div>
  )

}