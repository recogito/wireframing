import { BodyHeader } from './BodyHeader';

import './AnnotationPopup.css';

export const AnnotationPopup = () => {

  return (
    <div className="annotation-popup">
      <ul>
        <li>
          <article>
            <BodyHeader />
            <p>
              {`This is a comment.

Cheers,
Rainer`}
            </p>
          </article>
        </li>

        <li className="n-more">

        </li>

        <li>
          <article>
            <BodyHeader />
            <p>
              This is a reply.
            </p>
          </article>
        </li>
      </ul>
    </div>
  )

}