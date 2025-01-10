'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";
import type { Contact } from "@/types/contacts";

interface ContactsTableProps {
  contacts: Contact[];
}

export function ContactsTable({ contacts }: ContactsTableProps) {
  const getTypeColor = (type: Contact['type']) => {
    if (!type) return "default";
    
    switch (type) {
      case "client":
        return "success";
      case "supplier":
        return "warning";
      case "lead":
        return "primary";
      case "debtor":
        return "danger";
      case "creditor":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Table 
      aria-label="Contacts table"
      classNames={{
        wrapper: "min-h-[400px]",
      }}
    >
      <TableHeader>
        <TableColumn>NOMBRE</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>TELÉFONO</TableColumn>
        <TableColumn>TIPO</TableColumn>
        <TableColumn>NOMBRE COMERCIAL</TableColumn>
        <TableColumn>CÓDIGO</TableColumn>
        <TableColumn>MÓVIL</TableColumn>
      </TableHeader>
      <TableBody>
        {contacts.map((contact: Contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>
              <Chip color={getTypeColor(contact.type)} variant="flat">
                {contact.type}
              </Chip>
            </TableCell>
            <TableCell>{contact.tradeName}</TableCell>
            <TableCell>{contact.code}</TableCell>
            <TableCell>{contact.mobile}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
} 