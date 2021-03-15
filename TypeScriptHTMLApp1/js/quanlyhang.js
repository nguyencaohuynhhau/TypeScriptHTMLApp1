"use strict";
var sanpham_1 = require("./sanpham");
var QuanLyhang = (function () {
    function QuanLyhang() {
    }
    QuanLyhang.prototype.getCacSanPham = function () {
        return [];
    };
    QuanLyhang.prototype.getCacSanPhamById = function () {
        var motsanpham = new sanpham_1.SanPham(1, 'sp1', 90000, "mo ta", true, '1.png');
        return motsanpham;
    };
    QuanLyhang.prototype.addSanPham = function () { };
    QuanLyhang.prototype.showSanPham = function () {
        return '';
    };
    return QuanLyhang;
}());
//# sourceMappingURL=quanlyhang.js.map