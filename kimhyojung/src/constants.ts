interface Movie {
  name: string;
  imgSrc: string;
  imgAlt: string;
  movieURL: string;
  moviePrice: number;
}

interface Moviequery {
  moviename: undefined | string | string[];
  movieimg: undefined | string | string[];
}
const MOVIE_SEAT_ERRORMESSAGE: string = '잘못된 좌석 선택입니다';
const MOVIE_EMPTY_ERRORMESSAGE: string = '좌석을 하나 이상 선택해주세요';
const POSSIBLE_SEAT_COLOR: string = '#b1b1b1';
const NOT_POSSIBLE_SEAT_COLOR: string = 'red';
const CURRENT_SEAT_COLOR: string = '#50bcdf';

export type { Movie, Moviequery };
export {
  MOVIE_SEAT_ERRORMESSAGE,
  POSSIBLE_SEAT_COLOR,
  NOT_POSSIBLE_SEAT_COLOR,
  CURRENT_SEAT_COLOR,
  MOVIE_EMPTY_ERRORMESSAGE,
};
