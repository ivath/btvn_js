const A = "A";
const B = "B";
const C = "C";
const X = "X";
const tr = 1000000;

function kiemDiemTraKhuVuc(khuVuc) {
  switch (khuVuc) {
    case A:
      return 2;
    case B:
      return 1;
    case C:
      return 0.5;
    case X:
      return 0;
  }
}

function kiemDiemTraDoiTuong(doiTuong) {
  switch (doiTuong) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 1:
      return 1;
    case 0:
      return 0;
  }
}

document.getElementById("tinhToan").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;

  let diemToan = document.getElementById("so1").value * 1;

  let diemVan = document.getElementById("so2").value * 1;
  let diemAnh = document.getElementById("so3").value * 1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value * 1;
  console.log(diemVan);
  console.log(diemToan);
  console.log(diemAnh);
  console.log(khuVuc);
  console.log(doiTuong);

  let diemKhuVuc = kiemDiemTraKhuVuc(khuVuc);
  let diemDoiTuong = kiemDiemTraDoiTuong(doiTuong);
  let diemTong = diemToan + diemVan + diemAnh + (diemDoiTuong + diemKhuVuc);

  if (diemTong > diemChuan) {
    document.querySelector(".bg-warning").innerHTML =
      "Kết Quả Thi Của Thí Sinh là: Đậu";
  } else {
    document.querySelector(".bg-warning").innerHTML =
      "Kết Quả Thi Của Thí Sinh là: Rớt";
  }

  document.querySelector(".bg-success").innerHTML =
    "Điểm Thi Của Thí Sinh Là: " + diemTong;
};

document.getElementById("tinhThue").onclick = function () {
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let phuThuoc = document.getElementById("phuThuoc").value * 1;

  let thuNhapChiuThue = thuNhap - 4 * tr - phuThuoc * 1.6 * tr;
  let thueSuat = 0;
  if (thuNhapChiuThue <= 60 * tr) {
    thueSuat = 5 / 100;
  }

  if (thuNhapChiuThue > 60 * tr && thuNhapChiuThue <= 120 * tr) {
    thueSuat = 10 / 100;
  }

  if (thuNhapChiuThue > 120 * tr && thuNhapChiuThue <= 210 * tr) {
    thueSuat = 15 / 100;
  }

  if (thuNhapChiuThue > 210 * tr && thuNhapChiuThue <= 384 * tr) {
    thueSuat = 20 / 100;
  }

  if (thuNhapChiuThue > 384 * tr && thuNhapChiuThue <= 624 * tr) {
    thueSuat = 25 / 100;
  }

  if (thuNhapChiuThue > 624 * tr && thuNhapChiuThue <= 960 * tr) {
    thueSuat = 30 / 100;
  }

  if (thuNhapChiuThue > 960 * tr) {
    thueSuat = 35 / 100;
  }

  document.getElementById("btn01").innerHTML =
    "Thu nhập chịu thuế là : " + thuNhapChiuThue + "VND";
  document.getElementById("btn02").innerHTML = "Thuế Suất : " + thueSuat;
};

// document
//   .getElementById("loaiKhachHang")
//   .addEventListener("change", function () {
//     let loaiKhachHang = document.getElementById("loaiKhachHang").value;
//     let soKetNoi = document.getElementById("soKetNoi");

//     if (loaiKhachHang === "nhaDan") {
//       soKetNoi.style.display = "block";
//     } else {
//       soKetNoi.style.display = "none";
//     }
//   });

document
  .getElementById("loaiKhachHang")
  .addEventListener("change", function () {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let soKetNoiDiv = document.getElementById("soKetNoiDiv");

    if (loaiKhachHang === "doanhNghiep") {
      soKetNoiDiv.style.display = "block";
    } else {
      soKetNoiDiv.style.display = "none";
    }
  });

document.getElementById("tinhTien").onclick = function () {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoiDiv = document.getElementById("soKetNoi").value * 1;
  console.log(soKetNoiDiv);
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  let tinhTien = 0;
  if (loaiKhachHang === "nhaDan") {
    tinhTien = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else {
    let phiDichVuCoBan = 0;
    if (soKetNoiDiv < 10) {
      phiDichVuCoBan = 75;
    } else {
      phiDichVuCoBan = 75 + (soKetNoiDiv - 10) * 5 + 50 * soKenhCaoCap;
    }
    tinhTien = 15 + phiDichVuCoBan;
  }

  document.getElementById("btn03").innerHTML = "Tổng Tiền : " + tinhTien;
};
