import { Request, Response } from "express";
import { errorWrapper } from "../utils/error-wrapper";
import { NotificationService } from "../services/NotificationSerives";
import { Notification } from "../model/NotificationModel";
export class NotificationController {
  service: NotificationService;

  constructor() {
    this.service = new NotificationService();
  }

  getNotifications = async (_: Request, res: Response) => {
    const result = await errorWrapper(this.service.getNotifications());
    res.status(result.status).send(result.data);
  };

  getNotification = async (req: Request, res: Response) => {
    const result = await errorWrapper(
      this.service.getNotification(req.params.id)
    );
    res.status(result.status).json(result.data);
  };

  createNotification = async (
    req: Request<{}, {}, Notification, {}>,
    res: Response
  ) => {
    const result = await errorWrapper(
      this.service.createNotification(req.body as Notification)
    );
    res.status(result.status).json(result.data);
  };

  updateNotification = async (req: Request, res: Response) => {
    const notificationId = req.params.id;
    const body = {
      ...req.body,
      updated_at: new Date()
    };
    const result = await errorWrapper(
      this.service.updateNotification(notificationId, body)
    );
    res.status(result.status).json(result.data);
  };

  deleteNotification = async (req: Request, res: Response) => {
    const notificationId = req.params.id;
    const result = await errorWrapper(
      this.service.deleteNotification(notificationId)
    );
    res.status(result.status).json(result.data);
  };
}
