import Image from 'next/image';
import { lusitana } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center gap-2 leading-none text-white`}
    >
      <Image
        src="/moon.png"
        alt="smile"
        width={32}
        height={32}
        className="drop-down-lg rounded-lg"
      />
      <p className="text-[44px]">MysticMoonBlimo</p>
    </div>
  );
}
