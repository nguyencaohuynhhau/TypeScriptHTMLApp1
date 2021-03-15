import { SanPham } from "./sanpham";
class QuanLyhang {
    private hang :  SanPham;

    constructor() { }
    getCacSanPham(): SanPham[] {
        return [];
    }
    getCacSanPhamById(): SanPham {
        var motsanpham = new SanPham(1, 'sp1', 90000, "mo ta", true, '1.png');
        return motsanpham;
    }
    addSanPham(): void { }
    showSanPham(): string {
        return ''
    }
}