import { Notification, NotificationModel } from "../model/NotificationModel";

export default class NotificationRepository {
  async getNotifications() {
    const notifications = await NotificationModel.query();
    return notifications;
  }

  async getNotification(id: string) {
    const notifications = await NotificationModel.query()
      .findById(id)
      .throwIfNotFound();
    return notifications;
  }

  async createNotification(body: Notification) {
    const notification = await NotificationModel.query()
      .insert(body)
      .returning("*");
    return notification;
  }

  async updateNotification(id: string, body: Partial<Notification>) {
    const notification = NotificationModel.fromJson(body, {
      skipValidation: true
    });
    return await NotificationModel.query()
      .findById(id)
      .update(notification)
      .throwIfNotFound()
      .returning("*");
  }

  async deleteNotification(id: string) {
    const notification = await NotificationModel.query().deleteById(id);
    return notification;
  }
}
