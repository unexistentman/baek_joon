// 뒤에서 5등 위로

import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        return Arrays.stream(num_list)
            .sorted()
            .skip(5)
            .toArray();
    }
}