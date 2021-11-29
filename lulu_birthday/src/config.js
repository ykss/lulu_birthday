import { KAKAO_MAP_API_KEY, T_MAP_API_KEY } from "./API_KEY";

const config = {
  global: {
    kakaomapAPIKey: KAKAO_MAP_API_KEY,
    tmapAPIKey: T_MAP_API_KEY,
  },
  title: `루루의 네번째 생일파티🎂`,
  author: {
    name: "루루",
  },
  place: {
    name: "리블링코코",
    address: "경기 남양주시 별내면 송산로 519-7 1층",
    contact: "031-527-2053",
    latitude: 37.6869859,
    longitude: 127.133569,
  },
  date: "2021년 12월 4일 토요일 5시",
};

export default config;
