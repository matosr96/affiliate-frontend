import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AffiliateService {
  apiUrl: string = 'http://localhost:8080/api/v1/affiliates';

  constructor(private http: HttpClient) {}

  getAffiliates(): Observable<any> {
    const headers = new HttpHeaders().set('X-API-Key', 'abc123xyz456');
    return this.http.get(this.apiUrl, { headers }).pipe((res) => res);
  }

  createAffiliate(affiliateData: any): Observable<any> {
    const headers = new HttpHeaders().set('X-API-Key', 'abc123xyz456');
    return this.http.post(this.apiUrl, affiliateData, { headers });
  }

  deleteAffiliate(id: number): Observable<any> {
    const headers = new HttpHeaders().set('X-API-Key', 'abc123xyz456');
    return this.http.delete(`http://localhost:8080/api/v1/affiliates/${id}`, { headers });
  }

}
