import { ArrowRight } from '@phosphor-icons/react';
import { Avatar } from '../Avatar';

import './ReplyForm.css';

interface ReplyFormProps {

  placeholder?: string

}

export const ReplyForm = (props: ReplyFormProps) => {

  return (
    <form className="annotation-reply-form no-drag">
      <Avatar id="aboutgeo" name="aboutgeo" />

      <textarea 
        rows={1} 
        placeholder={props.placeholder || 'Reply...'} />

      <div className="send">
        <button>
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  )

}