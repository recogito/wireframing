import { CheckCircle, Circle, ImagesSquare, X, XCircle } from '@phosphor-icons/react';
import { ProgressCircle } from './ProgressCircle';

import './Upload.css';

export const Upload = () => {

  const progress = 60;

  return (
    <div className="upload-progress">
      <div className="title">
        <h1>Importing 1 item</h1>
        <X size={20} />
      </div>
      <div className="message">
        Unsupported file format: pdf
      </div>
      <ul>
        <li>
          <ImagesSquare className="filetype" size={20} />
          <span className="filename">test_01.jpg</span>
          {/* <XCircle className="progress-meter error" size={24} weight="fill" /> */}
          <CheckCircle className="progress-meter success" size={24} weight="fill" />
        </li>

        <li>
          <ImagesSquare className="filetype" size={20} />
          <span className="filename">test_02.jpg</span>
          <div className="progress-meter">
            <ProgressCircle progress={60} />
          </div>
        </li>

        <li>
          <ImagesSquare className="filetype" size={20} />
          <span className="filename">test_03.jpg</span>
          <CheckCircle className="progress-meter success" size={24} weight="fill" />
        </li>
      </ul>  
    </div>
  )

}