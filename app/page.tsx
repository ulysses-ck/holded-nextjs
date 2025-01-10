import { getContacts } from "./actions";
import { ContactsTable } from "@/components/contacts-table";

export default async function Home() {
  const contacts = await getContacts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contactos</h1>
      <ContactsTable contacts={contacts} />
    </div>
  );
}
