// const alphabetList = ["A","B","C","D","E","F","G","H"];
// 65~72
export const alphabetList = Array.from({ length: 8 }, (__, i) =>
  String.fromCharCode(i + 65)
);