// 배열 만들기 1
function solution(n, k) {
  return Array.from({ length: Math.floor(n / k) }, (_, i) => (i + 1) * k);
}
