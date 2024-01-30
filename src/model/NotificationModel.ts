import { ModelObject } from "objection";
import { ModelWithValidator } from "./base";

export class NotificationModel extends ModelWithValidator {
  id!: number;
  title!: string;
  body!: string;
  image?: string;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "notifications";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "body", "image"],
      properties: {
        title: { type: "string", minLength: 1 },
        body: { type: "number", minLength: 1 },
        image: { type: "string" }
      }
    };
  }

  $beforeInsert(): void | Promise<any> {
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export type Notification = ModelObject<NotificationModel>;
