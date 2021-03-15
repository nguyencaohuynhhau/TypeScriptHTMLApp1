export class SanPham {
    // thuoc tinh
    private _id: number;
    private _ten: string;
    private _gia: number;
    private _mota: string;
    private _tinhtrang: boolean;
    private _anh: string;

    constructor(id: number, ten: string, gia: number, mota: string, tinhtrang: boolean, anh: string) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.mota = mota;
        this.tinhtrang = tinhtrang;
        this.anh = anh;

    }
    public get id(): number {
        return this._id;
    }
    public set id(v : number){
         this._id = v;
    }
    public get gia(): number {
        return this._gia;
    }
    public set gia(v : number){
         this._gia = v;
    }
    public get ten(): string {
        return this._ten;
    }
    public set ten(v: string) {
        this.ten = v;
    }
    public get anh(): string {
        return this._anh;
    }
    public set anh(v: string) {
        this.anh = v;
    }
    public get mota(): string {
        return this._mota;
    }
    public set mota(v: string) {
        this.mota = v;
    }
    public get tinhtrang(): boolean {
        return this._tinhtrang;
    }
    public set tinhtrang(v: boolean) {
        this.tinhtrang = v;
    }


}