/**
 * @swagger
 *  components:
 *    schemas:
 *      ApiResponseGetCitizens:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          username:
 *            type: string
 *          status:
 *            type: string
 *          status:
 *            type: string
 *      ApiJoinCommunity:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *          password:
 *            type: string
 *      ApiJoinCommunityResponse:
 *        type: object
 *        properties:
 *          status:
 *            type: string
 *          token:
 *            type: string
 *          user:
 *            type: object
 *      ApiChat:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *          message:
 *            type: string
 *          timestamp:
 *            type: string
 *          statusMessage:
 *            type: string
 *      ApiChatResponse:
 *        type: object
 *        properties:
 *          _id:
 *            type:string
 *          username:
 *            type: string
 *          message:
 *            type: string
 *          timestamp:
 *            type: string
 *          statusMessage:
 *            type: string
 * 
 */


/**
 * @swagger
 * tags:
 *   name: Citizens
 *   description: API for managing citizens.
 */
/**
 * @swagger
 * tags:
 *   name: Chats
 *   description: API for managing chat messages.
 */

/**
 * @swagger
 * /api/v1/citizens:
 *    get:
 *      summary: Get all citizens. After joining the community, citizens can see themself listed in the directory, along with other citizens.
 *      tags: [Citizens]
 *      parameters:
 *       - name: sort
 *         in: path
 *         description: Sort the results by status and username
 *         required: true
 *         schema:
 *           type: string
 *         example: -status,username
 *       - name: fields
 *         in: path 
 *         description: Specify which fields to include in the response
 *         required: true
 *         schema:
 *           type: string
 *         example: username,status
 *      responses:
 *         200:
 *           description: A list of Citizens
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ApiResponseGetCitizens'
 *         400:
 *           description: Bad Request
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         401:
 *           description: Unauthorized
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         404:
 *           description: Not Found
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         500:
 *           description: Internal Server Error
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *    post:
 *      summary: Join a community
 *      tags: [Citizens]
 *      requestBody:
 *         content:
 *             application/json:
 *                schema:
 *                 items:
 *                   $ref: "#/components/schemas/ApiJoinCommunity"
 *      responses:
 *         200:
 *           description: Ok
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ApiResponseGetCitizens'
 *         400:
 *           description: Bad Request
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         401:
 *           description: Unauthorized
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         404:
 *           description: Not Found
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         500:
 *           description: Internal Server Error
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 * /chats:
 *    post:
 *      summary: Chat publicly. The citizen can send a chat to the community.
 *      tags: [chats]
 *      requestBody:
 *         content:
 *             application/json:
 *                schema:
 *                 items:
 *                   $ref: '#/components/schemas/ApiChat'
 *      responses:
 *         200:
 *           description: Ok
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ApiChatResponse'
 *         400:
 *           description: Bad Request
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         401:
 *           description: Unauthorized
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         404:
 *           description: Not Found
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         500:
 *           description: Internal Server Error
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *    get:
 *      summary: Get all Chats. After joining the community, Chats can see themself listed in the directory, along with other Chats.
 *      tags: [Chats]
 *      responses:
 *         200:
 *           description: A list of Chats
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ApiChatResponse'
 *         400:
 *           description: Bad Request
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         401:
 *           description: Unauthorized
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         404:
 *           description: Not Found
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 *         500:
 *           description: Internal Server Error
 *           content:
 *            application/json:
 *              schema:
 *                type: object
 */

import express from "express";
const router = express.Router();
// const passport = require('../middlewares/passport-config');

import {joinCommunity, getCitizens} from "../controllers/userController.js";

// Handle register
router.post("/citizens", joinCommunity);
router.get("/citizens", getCitizens)

export default router;
