interface cpu {}
interface memory {}
interface display {}
interface rom {}

interface IBus {
  cpu: olc6502;
  ram: any[];
  write(addr: number, data: any): void;
  read(arr: number, bReadOnly: boolean): number;
}

interface olc6502 {}

type uint8 = number;
type uint16 = number;
type rgb = [uint8, uint8, uint8];
