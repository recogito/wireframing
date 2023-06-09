import { Detective, DotsThreeVertical } from '@phosphor-icons/react';
import { ReplyForm } from './ReplyForm';
import { TagList } from './TagList';
import { Interstitial } from './Interstitial';

import './PrivateAnnotationPopup.css';

export const PrivateAnnotationPopup = () => {

  return (
    <div className="annotation-popup private">
      <TagList />
      
      <ul>
        <li>
          <article>
            <div className="private-avatar">
              <Detective size={20} weight="light" />
            </div>

            <div className="actions">
              <DotsThreeVertical size={20} weight="bold" />
            </div>
            <p>
              {`This is a private comment. Only I can see it. Even on public documents.`}
            </p>
          </article>
        </li>

        <li className="n-more">
          <Interstitial />
        </li>

        <li>
          <article>
            <div className="private-avatar">
              <Detective size={20} weight="light" />
            </div>
            <div className="actions">
              <DotsThreeVertical size={20} weight="bold" />
            </div>
            <p>
              This is a private reply.
            </p>
          </article>
        </li>
      </ul>

      <ReplyForm />
    </div>
  )

}