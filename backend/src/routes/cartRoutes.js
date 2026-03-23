import express from 'express'
import { ensureAuthenticated } from '../middlewares/authentication.js';

const cartRouter = express.Router();

cartRouter.get('/' , ensureAuthenticated)

export default cartRouter;