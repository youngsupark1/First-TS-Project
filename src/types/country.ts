export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[]; // 수도
  region: string; // 속한 지역
  subregion: string; // 하위 지역
  population: number; // 인구수
  flags: {
    // 국기
    png: string;
    svg: string;
  };
}
