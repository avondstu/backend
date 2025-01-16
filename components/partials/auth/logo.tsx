'use client'
import Image from 'next/image';
import avondImage from '@/public/images/logo/avond.png'
import { useTheme } from "next-themes";

const Logo = () => {
    const { theme: mode } = useTheme();
  return (
    <div>
      <Image
        src={avondImage}
        alt=""
        width={300}
        height={300}
        className=" w-12 "
      />
    </div>
  );
}

export default Logo;