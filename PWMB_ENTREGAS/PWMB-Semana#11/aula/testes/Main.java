public class Main {
  public static void main(String[] args) {
    int[] v = {3, 5, 9, 11, 15, 17, 19, 6};
    System.out.println(v);
  }

  public static void insertionSort(int[] v) {
    for (int i = 1; i< v.length; i++){
        int j = i;
        int x = v[j];
        while (j > 0 && x < v[j-1]) {
            v[j] = v[j-1];
            j--;
        }
        v[j] = x;
    }
  }
}