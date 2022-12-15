export default function Seat() {
  let seatNum = new Array(24);
  for (let i = 0; i < 24; i++) {
    if (i % 4 == 0) {
      seatNum.push({ id: i, color: "red" });
    } else {
      seatNum.push({ id: i, color: "blue" });
    }
  }
  return;
}
