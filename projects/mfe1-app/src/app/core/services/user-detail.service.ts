import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

export interface IUserDetail {
  userId: number;
  userName: string;
  emailId: string;
  gender: string;
  language: ILanguage[];
}

export interface ILanguage {
  lang: string;
  code: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  private userDetails: IUserDetail[] = [
    {
      userId: 1,
      userName: 'Vivek Maurya',
      emailId: 'vkmm777@gmail.com',
      gender: 'Male',
      language: [{ lang: 'Hindi', code: 1 }, { lang: 'English', code: 2 }, { lang: 'Sanskrit', code: 3 }],
    },
    {
      userId: 2,
      userName: 'Mayank Singh',
      emailId: 'mayank@gmail.com',
      gender: 'Male',
      language: [{ lang: 'Hindi', code: 1 }],
    },
    {
      userId: 3,
      userName: 'Sonam Kumari',
      emailId: 'sonam@gmail.com',
      gender: 'Female',
      language: [{ lang: 'English', code: 2 }, { lang: 'Sanskrit', code: 3 }],
    },
    {
      userId: 4,
      userName: 'Priya',
      emailId: 'priya456@gmail.com',
      gender: 'Female',
      language: [{ lang: 'Hindi', code: 1 }, { lang: 'Sanskrit', code: 3 }],
    },
    {
      userId: 5,
      userName: 'Mohit Kumar',
      emailId: 'mohit567@gmail.com',
      gender: 'Male',
      language: [{ lang: 'Sanskrit', code: 3 }],
    },
    {
      userId: 6,
      userName: 'Susil',
      emailId: 'susil8@gmail.com',
      gender: 'Male',
      language: [{ lang: 'Sanskrit', code: 3 }],
    }
  ];
  constructor(private http: HttpClient) { }

  getUserDetail(): Observable<IUserDetail[]> {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/users').pipe(map(d => this.userDetails));
  }
}
