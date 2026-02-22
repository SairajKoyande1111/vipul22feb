import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages, {
  name: z.string().min(1, "Name is required").regex(/^[A-Za-z\s]+$/, "Name can only contain letters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().length(10, "Phone number must be exactly 10 digits").regex(/^\d+$/, "Phone must contain only numbers"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
}).omit({
  id: true,
  createdAt: true,
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
