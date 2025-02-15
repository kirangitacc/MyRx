//ASSESSMENT RESULTS MyRx

//Q1
let a = [-12, -8, -7, -5, 2, 4, 5, 11, 15];

let k1 = a.map(function(i) {
    return i * i;
});
let k2 = k1.sort(function(a, b) {
    return a - b;
});
console.log(k2);
//Q2
class Student {
    constructor(name, id, dateOfJoining, addresses) {
        Object.defineProperty(this, 'name', {
            value: name,
            writable: false
        });

        Object.defineProperty(this, 'id', {
            value: id,
            writable: false
        });

        Object.defineProperty(this, 'dateOfJoining', {
            value: new Date(dateOfJoining),
            writable: false
        });

        Object.defineProperty(this, 'addresses', {
            value: addresses.map(address => ({
                ...address
            })),
            writable: false
        });

        Object.freeze(this);
    }
}

class Address {
    constructor(city, state) {
        Object.defineProperty(this, 'city', {
            value: city,
            writable: false
        });

        Object.defineProperty(this, 'state', {
            value: state,
            writable: false
        });
        Object.freeze(this);
    }
}

const a1 = new Address('hyderabad', 'Telangana');
const a2 = new Address('delhi', 'delhi');
const a3 = new Address('Mumbai', 'Maharashtra ');
const stu = new Student('Rajiv', '19F01A04690', '2025-02-15', [a1, a2, a3]);
console.log(stu);

//Q3
let b = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G'];
console.log(b.sort());
//Q4
function findMinPlatforms(arr, dep) {
    // Convert time strings to minutes
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Convert arrays to minutes
    arr = arr.map(timeToMinutes).sort((a, b) => a - b);
    dep = dep.map(timeToMinutes).sort((a, b) => a - b);

    let platformsNeeded = 0;
    let maxPlatforms = 0;
    let i = 0,
        j = 0;

    while (i < arr.length && j < dep.length) {
        if (arr[i] < dep[j]) {
            platformsNeeded++;
            i++;
            if (platformsNeeded > maxPlatforms) {
                maxPlatforms = platformsNeeded;
            }
        } else {
            platformsNeeded--;
            j++;
        }
    }

    return maxPlatforms;
}

// Example usage
const arr1 = ['9:00', '9:40', '9:50', '11:00', '15:00', '18:00'];
const dep1 = ['9:10', '12:00', '11:20', '11:30', '19:00', '20:00'];
console.log(findMinPlatforms(arr1, dep1)); // Output: 3

const arr2 = ['9:00', '9:40'];
const dep2 = ['9:10', '12:00'];
console.log(findMinPlatforms(arr2, dep2)); // Output: 1


//Q5
let map = new Map([
    [101, 'John Doe'],
    [102, 'Jane Smith'],
    [103, 'Peter Johnson']
]);

let arr = Array.from(map);
arr.sort((a, b) => a[1].localeCompare(b[1]));
let newArr = new Map(arr);
console.log(newArr);
