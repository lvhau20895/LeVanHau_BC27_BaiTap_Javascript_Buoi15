function getId(id) {
  return document.getElementById(id);
}

// KHÔNG TÁCH HÀM =============================================================
// function tinhTienDien() {
//     var hoTen = getId("hoTen").value;
//     var kw = +getId("kw").value;
//     var tienDien = 0;

//     if(hoTen == "" || kw == "" || kw < 0) {
//         alert("Vui lòng nhập giá trị");
//     } else if(kw <= 50) {
//         tienDien = kw * 500;
//     } else if(kw > 50 && kw <= 100) {
//         tienDien = 50 * 500 + (kw - 50) * 650;
//     } else if(kw > 100 && kw <= 200) {
//         tienDien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
//     } else if(kw > 200 && kw <= 350) {
//         tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
//     } else {
//         tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
//     }

//     var xuatTienDien = getId("xuatTienDien");
//     xuatTienDien.style.display = "block";
//     xuatTienDien.innerHTML = "Họ tên: " + hoTen + ";" + " Tiền điện: " + tienDien.toLocaleString() + " vnd";
// }

// TÁCH HÀM =============================================================
function tinhTienDien() {
  // B1: lấy input đầu vào (họ tên, số kw người dùng nhập)
  var hoTen = getId("hoTen").value;
  var kw = +getId("kw").value;

  // B3: Tạo biến tienDien hứng hàm tongTienDien
  var tienDien = tongTienDien(kw, 500, 650, 850, 1100, 1300);

  // B4: In kết quả ra trình duyệt
  var xuatTienDien = getId("xuatTienDien");
  xuatTienDien.style.display = "block";
  xuatTienDien.innerHTML =
    "Họ tên: " +
    hoTen +
    ";" +
    " Tiền điện: " +
    tienDien.toLocaleString() +
    " vnd";
}

// B2: Tách hàm tính tổng tiền điện, thêm tham số là (số kw người dùng nhập, mức giá điện cần thanh toán)
function tongTienDien(kw, kw_50, kw_50_100, kw_100_200, kw_200_350, kw_350) {
  var tienDien = 0;
  if (hoTen == "" || kw == "" || kw < 0) {
    alert("Vui lòng nhập giá trị");
  } else if (kw <= 50) {
    tienDien = kw * kw_50;
  } else if (kw <= 100) {
    tienDien = 50 * kw_50 + (kw - 50) * kw_50_100;
  } else if (kw <= 200) {
    tienDien = 50 * kw_50 + 50 * kw_50_100 + (kw - 100) * kw_100_200;
  } else if (kw <= 350) {
    tienDien =
      50 * kw_50 + 50 * kw_50_100 + 100 * kw_100_200 + (kw - 200) * kw_200_350;
  } else {
    tienDien =
      50 * kw_50 +
      50 * kw_50_100 +
      100 * kw_100_200 +
      150 * kw_200_350 +
      (kw - 350) * kw_350;
  }
  return tienDien;
}
