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
 *          message:
 *            type: string
 *          createdAt:
 *            type: string
 *      ApiChatResponse:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          username:
 *            type: string
 *          message:
 *            type: string
 *          timestamps:
 *            type: string
 *      ApiChatPrivate:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *          createdAt:
 *            type: string
 *      ApiChatPrivateResponse:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          username:
 *            type: string
 *          message:
 *            type: string
 *          timestamp:
 *            type: string
 *       ShareStatus:
 *        type: object
 *        properties:
 *          status:
 *            type: string
 *          explanation:
 *            type: string
 *          color:
 *            type: string
 *      ShareStatusResponse:
 *        type: object
 *        properties:
 *          _id:
 *            type: string
 *          status:
 *            type: string
 *          explanation:
 *            type: string
 *          color:
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
 *   name: Messages
 *   description: API for managing chat messages.
 */
/**
 * @swagger
 * tags:
 *  name: Statuses
 *  description: API for share status.
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
 * /api/v1/messages:
 *    post:
 *      summary: Chat publicly. The citizen can send a chat to the community.
 *      tags: [Messages]
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
 *      summary: Get all messages. After joining the community, messages can see themself listed in the directory, along with other messages.
 *      tags: [messages]
 *      responses:
 *         200:
 *           description: A list of messages
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
 * /api/v1/message:
 *    post:
 *      summary: Chat Privately. The citizen can send a private chat to another citizen.
 *      tags: [Messages]
 *      requestBody:
 *         content:
 *             application/json:
 *                schema:
 *                 items:
 *                   $ref: '#/components/schemas/ApiChatPrivate'
 *      responses:
 *         200:
 *           description: Ok
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ApiChatPrivateResponse'
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
 * /api/v1/message/id
 *    get:
 *      summary: Get all messages. After joining the community, messages can see themself listed in the directory, along with other messages.
 *      tags: [messages]
 *      responses:
 *         200:
 *           description: A list of messages
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ApiChatPrivateResponse'
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
 * /api/v1/statuses:
 *    post:
 *      summary: ShareStatus. The citizen can share a status.
 *      tags: [Messages]
 *      requestBody:
 *         content:
 *             application/json:
 *                schema:
 *                 items:
 *                   $ref: '#/components/schemas/ShareStatus'
 *      responses:
 *         200:
 *           description: Ok
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ShareStatusResponse'
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
 *      summary: Get all messages. After joining the community, messages can see themself listed in the directory, along with other messages.
 *      tags: [messages]
 *      responses:
 *         200:
 *           description: A list of messages
 *           content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#components/schemas/ShareStatusResponse'
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
