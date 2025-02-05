export const Base_URL = window.location.hostname === 'localhost' 
? 'http://localhost:7001'    // Use localhost URL in development
: '/api' ;      // Use relative path in production