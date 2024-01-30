import { Notification } from "../model/NotificationModel";
import NotificationRepository from "../repositories/NotificationRepo";

export class NotificationService {
  private repository: NotificationRepository;

  constructor() {
    this.repository = new NotificationRepository();
  }
  async getNotifications() {
    return await this.repository.getNotifications();
  }

  async getNotification(id: string) {
    return await this.repository.getNotification(id);
  }

  async createNotification(body: Notification) {
    return await this.repository.createNotification(body);
  }

  async updateNotification(id: string, body: Partial<Notification>) {
    return await this.repository.updateNotification(id, body);
  }

  async deleteNotification(id: string) {
    const deletedNotification = this.repository.deleteNotification(id);
    return deletedNotification;
  }
}
