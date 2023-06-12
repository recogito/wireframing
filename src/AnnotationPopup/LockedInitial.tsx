import { BodyHeader } from './BodyHeader';

import './AnnotationPopup.css';
import './LockedInitial.css';

export const LockedInitial = () => {

  return (
    <div className="annotation-popup locked">
      <BodyHeader user="aboutgeo" />
      <div className="writing">
        <div className="dot-typing" />
      </div>
    </div>
  )

}