export default class Ram {
  public bytes: Uint8Array;

  constructor(bytesize: uint8) {
    this.bytes = new Uint8Array(bytesize);
  }

  public read(addr: uint16): uint8 {
    return this.bytes[addr];
  }

  public write(addr: uint16, data: uint8): void {
    this.bytes[addr] = data;
  }
}
