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
 *          password:
 *            type: string
 *      ApiJoinCommunity:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *          password:
 *            type: string
 */


/**
 * @swagger
 * tags:
 *   name: Citizens
 *   description: API for managing citizens
 */

/**
* @swagger
* /citizens:
*    get:
*      summary: Get all citizens
*      tags: [Citizens]
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
*
*/


import express from 'express';

const router = express.Router();


export default router;
