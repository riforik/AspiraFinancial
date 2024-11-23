import Image from 'next/image'

export default function AspiraLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Image
        src="/Aspira-logo-large.svg"
        width={50}
        height={42}
        alt="Aspira logo, button, home page"
      />
      <p className="text-[44px] text-slate-900 font-bold ml-4">Aspira</p>
    </div>
  );
}