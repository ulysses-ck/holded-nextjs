export interface Contact {
  id: string;
  customId?: string;
  name?: string;
  code?: string;
  tradeName?: string;
  email?: string;
  mobile?: string;
  phone?: string;
  type?: 'supplier' | 'debtor' | 'creditor' | 'client' | 'lead';
} 