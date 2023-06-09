import { BodyHeader } from './BodyHeader';
import { ReplyForm } from './ReplyForm';
import { TagList } from './TagList';
import { Placeholder } from './Placeholder';

import './AnnotationPopup.css';

export const AnnotationPopup = () => {

  return (
    <div className="annotation-popup">
      <TagList />

      <ul>
        <li>
          <article>
            <BodyHeader user="aboutgeo" />
            <p>
              {`This is a comment.

Cheers,
Rainer`}
            </p>
          </article>
        </li>

        <li className="n-more">
          <Placeholder />
        </li>

        <li>
          <article>
            <BodyHeader user="Rainer Simon" />
            <p>
              This is a reply.
            </p>
          </article>
        </li>
      </ul>

      <ReplyForm />
    </div>
  )

}