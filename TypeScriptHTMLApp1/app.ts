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
//console.log(nhanVat1.hienthiten())

enum state  { Create = 10, Processing, finish }
class congViec {
    id: number;
    ten: string;
    trang_thai: state;

    constructor(id: number, ten: string, trang_thai: state) {
        this.id = id;
        this.ten = ten;
        this.trang_thai = trang_thai;
    }
    thongTin() {
        return `${this.id} - ten: ${this.ten}  - trangthai: ${this.trang_thai}   `;
    }
}

let cv1 = new congViec(1, 'hoc html', state.Create)
console.log(cv1.thongTin())
