export const trains = [
  {
    id: 1,
    number: "743К",
    route: "Київ → Львів",
    departure: "2025-05-20T08:30:00",
    duration: "5 год 20 хв",
    wagons: [
      { id: 1, type: "Купе", seats: 36, bookedSeats: [2,5,10] },
      { id: 2, type: "Плацкарт", seats: 54, bookedSeats: [15,20,33] }
    ]
  },
  {
    id: 2,
    number: "105Л",
    route: "Одеса → Харків",
    departure: "2025-05-20T14:15:00",
    duration: "9 год 45 хв",
    wagons: [
      { id: 1, type: "Купе", seats: 36, bookedSeats: [] },
      { id: 2, type: "Люкс", seats: 18, bookedSeats: [3,7] }
    ]
  },
  {
    id: 3,
    number: "789П",
    route: "Дніпро → Ужгород",
    departure: "2025-05-21T06:00:00",
    duration: "12 год 10 хв",
    wagons: [
      { id: 1, type: "Плацкарт", seats: 54, bookedSeats: 
[10,11,12,13,44,45] }
    ]
  }
];
