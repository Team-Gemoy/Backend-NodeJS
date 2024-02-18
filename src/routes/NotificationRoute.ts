import { Router } from "express";
import { NotificationController } from "../controller/NotificationController";

const notificationRoute = Router();
const notificationController = new NotificationController();

const prefix: string = "notification";

/**
 * @openapi
 * /api/notifications/:
 *  get:
 *    summary: Get all notifications
 *    description: Get all notifications
 *    tags:
 *      - Notification
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notification'
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *                type: array
 *                items:
 *                  type: object
 *                  $ref: '#/components/schemas/Notification'
 */
notificationRoute.get(`/${prefix}`, notificationController.getNotifications); // api get all notifications

/**
 * @openapi
 * /api/notifications/{id}:
 *  get:
 *    summary: Get a notification
 *    description: Get a notification
 *    tags:
 *      - Notification
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of search notification
 *        required: true
 *        schema:
 *          type: string
 *          format: number
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *                type: object
 *                $ref: '#/components/schemas/Notification'
 */
notificationRoute.get(`/${prefix}/:id`, notificationController.getNotification); // api get notification by id

/**
 * @openapi
 * /api/notifications/:
 *  post:
 *    summary: Insert a notification
 *    description: Insert a notification
 *    tags:
 *      - Notification
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notification'
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *                type: object
 *                $ref: '#/components/schemas/Notification'
 */
notificationRoute.post(`/${prefix}`, notificationController.createNotification); // api create new notification

/**
 * @openapi
 * /api/notifications:
 *  patch:
 *    summary: Update a notification
 *    description: Update a notification
 *    tags:
 *      - Notification
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of a notification that will update
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notification'
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *                type: object
 *                $ref: '#/components/schemas/Notification'
 */
notificationRoute.patch(
  `/${prefix}/:id`,
  notificationController.updateNotification
); //api update a notification

/**
 * @openapi
 * /api/notifications:
 *  delete:
 *    summary: Delete a notification
 *    description: Delete a notification
 *    tags:
 *      - Notification
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id of a notification that will delete
 *        required: true
 *        schema:
 *          type: string
 *          format: number
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *                type: object
 *                $ref: '#/components/schemas/Notification'
 */
notificationRoute.delete(
  `/${prefix}/:id`,
  notificationController.deleteNotification
); //api delete a notification

export default notificationRoute;
