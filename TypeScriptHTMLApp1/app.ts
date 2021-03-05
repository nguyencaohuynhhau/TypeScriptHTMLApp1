class nhan_vat_game {
    ten_nhan_vat: string;
    slogan: string;
    mau: number;
    // de tao ra instance(nhan vat thuc)
    constructor(ten_nhan_vat: string, slogan: string, mau: number) {
        //this la instance vua tao
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau;
    }
    chay() { }
    chem() { }
    hienthiten() {
        return `nhan vat: ${this.ten_nhan_vat}, slogan: ${this.slogan}, mau: ${this.mau},`
    }
}
var nhanVat1 = new nhan_vat_game('Ire', 'Y chi luoi kiem', 697.2);
console.log(nhanVat1.hienthiten())