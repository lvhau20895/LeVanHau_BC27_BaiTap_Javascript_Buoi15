function getId(id) {
  return document.getElementById(id);
}

// KHÔNG TÁCH HÀM ===================================================
// function ketQua() {
//   var diemChuan = +getId("diemChuan").value;
//   var khuVuc = +getId("chonKhuVuc").value;
//   var doiTuong = +getId("chonDoiTuong").value;
//   var monThu1 = +getId("mon1").value;
//   var monThu2 = +getId("mon2").value;
//   var monThu3 = +getId("mon3").value;
//   var tongDiem = monThu1 + monThu2 + monThu3 + khuVuc + doiTuong;
//   getId("divKetQua").style.display = "block";
//   var xuatKetQua = getId("xuatKetQua");

//   if(monThu1 === 0 || monThu2 === 0 || monThu3 === 0) {
//     xuatKetQua.style.color = "red";
//     xuatKetQua.innerHTML = "Bạn đã rớt do có 1 môn 0 điểm";
//   }else if (tongDiem >= diemChuan) {
//     xuatKetQua.style.color = "green";
//     xuatKetQua.innerHTML = "Bạn đã đậu " + "Tổng điểm: " + tongDiem;
//   } else {
//     xuatKetQua.style.color = "red";
//     xuatKetQua.innerHTML = "Bạn đã rớt " + "Tổng điểm: " + tongDiem;
//   }
// }

// TÁCH HÀM ===================================================
function ketQua() {
  // B1: Lấy input đầu vào (điểm chuẩn, khu vực, đối tượng, 3 môn học)
  var diemChuan = +getId("diemChuan").value;
  var khuvuc = getId("chonKhuVuc").value;
  var doiTuong = getId("chonDoiTuong").value;
  var mon1 = +getId("mon1").value;
  var mon2 = +getId("mon2").value;
  var mon3 = +getId("mon3").value;

  //B6: Hứng kết quả khu vực và đối tượng
  khuvuc = chonKhuVuc(khuvuc);
  doiTuong = chonDoiTuong(doiTuong);
  // Tạo biến hứng hàm tongDiem3Mon và diemTongKet
  var diem3Mon = tongDiem3Mon(mon1, mon2, mon3);
  var diemTongKet = diem3Mon + khuvuc + doiTuong;

  //B7: Gọi hàm in kêt quả ra trình duyệt
  hienThiKetQua(mon1, mon2, mon3, diemChuan, diemTongKet);
}

// B2: Tách hàm khu vực có tham số là (khuVuc) để trả về kết quả khi chọn khu vực
function chonKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "2":
      return 2;
    case "1":
      return 1;
    case "0.5":
      return 0.5;
    default:
      return 0;
  }
}

// B3: Tách hàm đối tượng có tham số là (doiTuong) để trả về kết quả khi chọn đối tượng
function chonDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "2.5":
      return 2.5;
    case "1.5":
      return 1.5;
    case "1":
      return 1;
    default:
      return 0;
  }
}

// B4: Tách hàm tính tổng điêm 3 môn với các tham số lần lượt là (mon1, mon2, mon3) và trả về điểm tổng 3 môn
function tongDiem3Mon(mon1, mon2, mon3) {
  return mon1 + mon2 + mon3;
}

// B5: Tách hàm logic và hiển thị kết quả với các tham số (mon1, mon2, mon3, diemChuan, diemTongKet)
function hienThiKetQua(mon1, mon2, mon3, diemChuan, diemTongKet) {
  getId("divKetQua").style.display = "block";
  var xuatKetQua = getId("xuatKetQua");
  if (!mon1 || !mon2 || !mon3) {
    xuatKetQua.style.color = "red";
    xuatKetQua.innerHTML = `Bạn đã rớt do có 1 môn 0 điểm`;
  } else if (diemTongKet >= diemChuan) {
    xuatKetQua.style.color = "green";
    xuatKetQua.innerHTML = `Bạn đã đậu; Tổng điểm: ${diemTongKet}`;
  } else {
    xuatKetQua.style.color = "red";
    xuatKetQua.innerHTML = `Bạn đã rớt; Tổng điểm: ${diemTongKet}`;
  }
}
