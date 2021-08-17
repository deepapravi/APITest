require('dotenv').config();
import supertest from 'supertest';
import Testingenv from './Testingenv';
const request=supertest(Testingenv.baseUrl);
export default request;
