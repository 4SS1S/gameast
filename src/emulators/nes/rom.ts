export default class Rom {
  constructor(private bytes: Uint8Array) {}

  get bytesize(): number {
    return this.bytes.length;
  }

  public read(addr: uint16): uint8 {
    return this.bytes[addr];
  }
}
