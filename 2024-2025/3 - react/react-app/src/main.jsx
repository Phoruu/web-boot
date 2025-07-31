// import React from 'react';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// import List from './List.jsx'

import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1_TimeOfDay from './App1_TimeOfDay.jsx'



createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>

      <App1_TimeOfDay />
      
    </React.StrictMode>
  </div>
);