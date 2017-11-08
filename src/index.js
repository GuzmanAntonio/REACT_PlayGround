import React from 'react';
import ReactDOM from 'react-dom';
// import App from './webApp/App';
// import SmartApp from './SmartApp/App'
import registerServiceWorker from './registerServiceWorker';
//import MappingAndFiltering from './MappingAndFiltering/MappingAndFiltering'
import TexMexApp from './tex-mex-solution/App'

ReactDOM.render(<TexMexApp />, document.getElementById('root'));
registerServiceWorker();
