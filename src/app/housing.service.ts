// Angular의 의존성 주입 시스템에 의해 인스턴스화 될 수 있음을 나타냄
import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

// Injectable 데코레이터를 사용하여 이 클래스가 서비스로 사용될 수 있음을 Angular에 알립니다.
// providedIn: 'root'는 이 서비스가 애플리케이션의 root injector에 등록되어
// 애플리케이션 전체에서 사용할 수 있음을 나타냅니다.
@Injectable({ providedIn: 'root' })
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string): void {
    // 신청 정보를 처리하는 코드를 여기에 작성합니다.
    console.log(
      `Application submitted by ${firstName} ${lastName} with email ${email}`
    );
  }
}
