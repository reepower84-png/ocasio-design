import { promises as fs } from "fs";
import path from "path";
import { Contact } from "./types";

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

export async function getContacts(): Promise<Contact[]> {
  await ensureDataFile();
  const data = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

export async function addContact(
  contact: Omit<Contact, "id" | "createdAt" | "isRead">
): Promise<Contact> {
  const contacts = await getContacts();

  const newContact: Contact = {
    id: Date.now().toString(),
    ...contact,
    createdAt: new Date().toISOString(),
    isRead: false,
  };

  contacts.unshift(newContact);
  await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2));

  return newContact;
}

export async function markAsRead(id: string): Promise<Contact | null> {
  const contacts = await getContacts();
  const index = contacts.findIndex((c) => c.id === id);

  if (index === -1) return null;

  contacts[index].isRead = true;
  await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2));

  return contacts[index];
}

export async function deleteContact(id: string): Promise<boolean> {
  const contacts = await getContacts();
  const filteredContacts = contacts.filter((c) => c.id !== id);

  if (filteredContacts.length === contacts.length) return false;

  await fs.writeFile(DATA_FILE, JSON.stringify(filteredContacts, null, 2));
  return true;
}
