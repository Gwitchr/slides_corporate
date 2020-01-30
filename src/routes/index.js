import express from 'express';
  // import AWS_Upload from './aws-upload';
  // import Customer from './customer';
// import Subscriber from './public/subscriber';

// import { authorization } from '../middlewares/auth';
const API = '/v1/';
const API_PUBLIC = '/v1/public';

const router = express.Router();
  router.get('/', (req, res) => {
    res.send('n12mx Development');
  })

  // router.use(API,authorization);

  router.get(API, (req, res) => {
    res.render('index', {title: 'n12mx API'});
  })

  //private
  // router.use(API,ProductP)


  //public
  // router.use(API_PUBLIC,Subscriber);




export default router;
