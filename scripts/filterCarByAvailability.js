function filterCarByAvailability(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Tempat penampungan hasil
    const result = [];

    // Tulis code-mu disini
    cars.forEach((car) => {
        // ? Check availability
        if (car.available) {
            // TODO: Push car with true available
            result.push(car);
        }
    });

    // for (let i = 0; i < cars.length; i++) {
    //     // Check availability
    //     if (cars[i].available) {
    //         result.push(cars[i]);
    //     }
    // }

    // for (let i in cars) {
    //     // Check availability
    //     if (cars[i].available) {
    //         result.push(cars[i]);
    //     }
    // }

    // for (let car of cars) {
    //     // Check availability
    //     if (car.available) {
    //         result.push(car);
    //     }
    // }

    // let i = 0;
    // while (i < cars.length) {
    //     // Check availability
    //     if (cars[i].available) {
    //         result.push(cars[i]);
    //     }
    //     i++;
    // }

    // Rubah code ini dengan array hasil filter berdasarkan availablity
    return result;
}
