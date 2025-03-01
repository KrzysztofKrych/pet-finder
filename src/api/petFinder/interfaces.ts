export interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
}

export interface PaginationLinks {
  next: Next;
}

export interface Next {
  href: string;
}
