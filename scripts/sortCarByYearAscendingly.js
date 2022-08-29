function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  console.log('Ascending Sorting Algorithm');

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  var result = [...cars];

  // Tulis code-mu disini

  const bubbleSort = (arr) => {
      let status = false;
      do {
          status = true;

          for (let i = 1; i < arr.length; i++) {
              if (arr[i - 1].year > arr[i].year) {
                  [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                  status = false;
              }
          }
      } while (!status);
  };

  // merge algorithm
  const merge = (arr, kiri, mid, kanan) => {
      // deklarasikan sebuah temporary array
      var n1 = mid - kiri + 1;
      var n2 = kanan - mid;

      var L = new Array(n1);
      var R = new Array(n2);

      // masukkan elemen dari kiri hingga tengah ke temp array L[]
      for (var i = 0; i < n1; i++) {
          L[i] = arr[kiri + i];
      }

      // masukkan elemen dari tengah hingga kanan ke temp array R[]
      for (var j = 0; j < n2; j++) {
          R[j] = arr[mid + 1 + j];
      }

      // deklarasikan index sub array pertama, kedua, dan merged array
      var pertama = 0;
      var kedua = 0;
      var merged = kiri;

      // mergin algorithm
      while (pertama < n1 && kedua < n2) {
          if (L[pertama].year <= R[kedua].year) {
              arr[merged] = L[pertama];
              pertama++;
          } else {
              arr[merged] = R[kedua];
              kedua++;
          }
          merged++;
      }

      // input semua elemen pada array kiri jika masih bersisa
      while (pertama < n1) {
          arr[merged] = L[pertama];
          pertama++;
          merged++;
      }

      // input semua elemen pada array kanan jika masih bersisa
      while (kedua < n2) {
          arr[merged] = R[kedua];
          kedua++;
          merged++;
      }
  };

  // merge sort algorithm
  const mergeSort = (arr, kiri, kanan) => {
      // ketika nilai kiri sudah melebihi kanan maka function akan berhenti
      if (kiri >= kanan) return;

      // hitung nilai tengah array
      var mid = parseInt(kiri + (kanan - kiri) / 2);

      // mergesort dari kiri hingga tengah
      mergeSort(arr, kiri, mid);

      // mergesort dari mid+1 hingga kanan
      mergeSort(arr, mid + 1, kanan);

      // merge semua array
      merge(arr, kiri, mid, kanan);
  };

  console.log('sebelum ');
  console.table(result);

  // sorting the array
  var kanan = result.length - 1;
  mergeSort(result, 0, kanan);

  console.table(result);

  // const result = bubbleSort(newArr);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
