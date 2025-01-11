'use server';

import holded from "@/.api/apis/holded";
import type { Contact } from "@/types/contacts";
import type { ListContactsResponse200 } from "@/.api/apis/holded/types";

export async function getContacts(): Promise<Contact[]> {
  try {
    holded.auth(process.env.HOLDED_API_KEY as string);
    const contacts = await holded.listContacts();
    
    return contacts.data
      .filter((contact): contact is NonNullable<ListContactsResponse200[number]> & { id: string } => 
        typeof contact?.id === 'string'
      )
      .map((contact) => ({
        id: contact.id,
        customId: contact.customId,
        name: contact.name,
        code: contact.code,
        tradeName: contact.tradeName,
        email: contact.email,
        mobile: contact.mobile,
        phone: contact.phone,
        type: contact.type as Contact['type'],
      }));
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
} 