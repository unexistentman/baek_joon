// 접미사 배열
function solution(my_string) {
  return [...my_string].map((_, idx) => my_string.slice(idx)).sort();
}