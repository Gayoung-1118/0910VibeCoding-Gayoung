import data from "@/data/profile.json";
import type { Profile } from "@/types/profile";

// 지금은 로컬 JSON에서 읽는다. 나중에 DB로 옮길 때는 이 파일만 바꾸면 된다.
const profile: Profile = data;

export function getProfile(): Profile {
  return profile;
}
