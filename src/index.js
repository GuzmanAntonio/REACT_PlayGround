import React from 'react';
import ReactDOM from 'react-dom';
// import App from './webApp/App';
// import SmartApp from './SmartApp/App'
import registerServiceWorker from './registerServiceWorker';
//import MappingAndFiltering from './MappingAndFiltering/MappingAndFiltering'
import ChatterApp from './ChatterApp/ChatterApp'

ReactDOM.render(<ChatterApp />, document.getElementById('root'));
registerServiceWorker();
