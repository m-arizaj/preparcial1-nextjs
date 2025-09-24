export interface EditorialDTO { id?: number; name?: string }
export interface OrganizationDTO { id?: number; name?: string }

export interface BookDTO {
  id?: number;
  name: string;
  isbn: string;
  image: string;
  publishingDate: string;         
  description: string;
  editorial?: EditorialDTO;
}

export interface PrizeDTO {
  id?: number;
  premiationDate: string;           
  name: string;
  description: string;
  organization?: OrganizationDTO;
}

export interface ReviewDTO {
  id?: number;
  name: string;
  source: string;
  description: string;
  book?: BookDTO;
}

export interface AuthorDetailDTO {
  id?: number;
  birthDate: string;                
  name: string;
  description: string;
  image: string;
  books: BookDTO[];
  prizes: PrizeDTO[];
}
