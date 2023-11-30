//use npm run dev to run dev script
//use npm start to run start script (same as npm run start)


const { format } = require('date-fns');

const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))

console.log(uuid())