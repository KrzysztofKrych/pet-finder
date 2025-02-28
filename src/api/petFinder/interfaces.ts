export interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: PaginationLinks;
}

export interface PaginationLinks {
  next: Next;
}

export interface Next {
  href: string;
}
