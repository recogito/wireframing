import { CaretDown } from '@phosphor-icons/react';

import './Interstitial.css';

export const Interstitial = () => {

  return (
    <div className="annotation-comments-interstitial">
      <div className="divider" />
      <div className="label">
        Show 3 more replies
        <CaretDown size={12} />
      </div>
    </div>
  )

}