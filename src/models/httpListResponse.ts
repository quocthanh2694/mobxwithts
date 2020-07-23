
interface Data<T> {
  items: T[];
  paging: {
    totalPages: number;
    totalElements: number;
  }
}

export interface HttpListResponse<T> {
  data: Data<T>;
  status: string;
  status_code: number;
  status_message: string;
}

export interface HttpPagingListResponse<T> {
  data: Data<T>;
  status: string;
  status_code: number;
  status_message: string;
  paging: {
    totalPages: number;
    totalElements: number;
  }
}
