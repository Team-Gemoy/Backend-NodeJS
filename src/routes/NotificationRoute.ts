import { Router } from "express";
import { NotificationController } from "../controller/NotificationController";

const notificationRoute = Router();
const notificationController = new NotificationController();

const prefix: string = "notification";

notificationRoute.get(`/${prefix}`, notificationController.getNotifications); // api get all notifications
notificationRoute.get(`/${prefix}/:id`, notificationController.getNotification); // api get notification by id
notificationRoute.post(`/${prefix}`, notificationController.createNotification); // api create new notification
notificationRoute.patch(
  `/${prefix}/:id`,
  notificationController.updateNotification
); //api update a notification
notificationRoute.delete(
  `/${prefix}/:id`,
  notificationController.deleteNotification
); //api delete a notification

export default notificationRoute;
