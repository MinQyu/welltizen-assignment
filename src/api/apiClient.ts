import { HttpClient } from './api';

/**
 * API 클라이언트
 */
export class ApiClient extends HttpClient {
  constructor(baseUrl: string = 'http://localhost:3000') {
    super({ baseUrl });
  }
}

// 싱글톤 인스턴스 생성
export const apiClient = new ApiClient();
