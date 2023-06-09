import { ArrowRight } from '@phosphor-icons/react';
import { Avatar } from '../Avatar';

import './ReplyForm.css';

export const ReplyForm = () => {

  return (
    <form className="annotation-reply-form no-drag">
      <Avatar id="aboutgeo" name="aboutgeo" />

      <textarea 
        rows={1} 
        placeholder="Reply..." />

      <div className="send">
        <button>
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  )

}