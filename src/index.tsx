import { createRoot } from 'react-dom/client';
// import { AnnotationPopup } from './AnnotationPopup';
// import { PrivateAnnotationPopup } from './AnnotationPopup';
// import { EmptyPopup } from './AnnotationPopup';
// import { LockedInitial } from './AnnotationPopup/LockedInitial';
import { Upload } from './Upload';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<Upload />);
