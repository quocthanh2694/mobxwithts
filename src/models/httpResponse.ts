export interface HttpResponse<T> {
  data: T;
  status: string;
  status_code: number;
  status_message: string;
}