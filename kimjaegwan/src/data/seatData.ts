let seatArr: {}[] = [];
for (let i = 0; i < 48; i++) {
    if (i % 9 == 0) {
        seatArr.push({ id: i, status: 'unvailable' });
    } else {
        seatArr.push({ id: i, status: 'vacancy' });
    }
}

const returnSeatData = () => {
    return seatArr;
};

export default returnSeatData;
