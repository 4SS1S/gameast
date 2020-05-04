import Ram from "./ram";
import Ppu from "./ppu";
import Rom from "./rom";

export default class Bus {
  private rom?: Rom;

  constructor(private ppu: Ppu, private ram: Ram) {
    // this.ram = new Ram();
    // for(let i: ram) i = 0x00;
  }

  public write(addr: uint16, data: uint8): void {
    if (addr >= 0x000 && addr < 0x0800) {
      return this.ram.write(addr, data);
    } else if (addr >= 0x0800 && addr < 0x2000) {
      return this.ram.write(addr - 0x0800, data);
    }
  }

  public read(addr: uint16): uint8 {
    return 0x000;
  }
}
