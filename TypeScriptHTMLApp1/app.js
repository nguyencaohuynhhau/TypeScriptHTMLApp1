var nhan_vat_game = (function () {
    // de tao ra instance(nhan vat thuc)
    function nhan_vat_game(ten_nhan_vat, slogan, mau) {
        //this la instance vua tao
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau;
    }
    nhan_vat_game.prototype.chay = function () { };
    nhan_vat_game.prototype.chem = function () { };
    nhan_vat_game.prototype.hienthiten = function () {
        return "nhan vat: " + this.ten_nhan_vat + ", slogan: " + this.slogan + ", mau: " + this.mau + ",";
    };
    return nhan_vat_game;
}());
var nhanVat1 = new nhan_vat_game('Ire', 'Y chi luoi kiem', 697.2);
console.log(nhanVat1.hienthiten());
//# sourceMappingURL=app.js.map