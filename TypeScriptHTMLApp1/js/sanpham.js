"use strict";
var SanPham = (function () {
    function SanPham(id, ten, gia, mota, tinhtrang, anh) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.mota = mota;
        this.tinhtrang = tinhtrang;
        this.anh = anh;
    }
    Object.defineProperty(SanPham.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "gia", {
        get: function () {
            return this._gia;
        },
        set: function (v) {
            this._gia = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (v) {
            this.ten = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "anh", {
        get: function () {
            return this._anh;
        },
        set: function (v) {
            this.anh = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "mota", {
        get: function () {
            return this._mota;
        },
        set: function (v) {
            this.mota = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "tinhtrang", {
        get: function () {
            return this._tinhtrang;
        },
        set: function (v) {
            this.tinhtrang = v;
        },
        enumerable: true,
        configurable: true
    });
    return SanPham;
}());
exports.SanPham = SanPham;
//# sourceMappingURL=sanpham.js.map