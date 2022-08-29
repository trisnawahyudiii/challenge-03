function sortCarByYearAscendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    let newArray = [...cars];

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

        return arr;
    };

    let result = bubbleSort(newArray);

    console.table(result);

    // Rubah code ini dengan array hasil sorting secara ascending
    return result;
}
