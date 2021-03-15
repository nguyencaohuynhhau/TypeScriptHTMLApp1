"use strict";
var sanpham_1 = require("./sanpham");
var QuanLyHang = (function () {
    function QuanLyHang() {
    }
    QuanLyHang.prototype.getCacSanPham = function () {
        return [];
    };
    QuanLyHang.prototype.getCacSanPhamById = function () {
        var motsanpham = new sanpham_1.SanPham(1, 'sp1', 90000, "mo ta", true, '1.png');
        return motsanpham;
    };
    QuanLyHang.prototype.addSanPham = function () { };
    QuanLyHang.prototype.showSanPham = function () {
        return '';
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
//# sourceMappingURL=quanlyhang.js.map