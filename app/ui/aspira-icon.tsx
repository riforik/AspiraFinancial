import Image from 'next/image'

export default function AspiraIconLogo() {
  return (
    <div className="">
      <Image
        src="/Aspira-icon-logo.svg"
        width={50}
        height={40}
        alt="Aspira logo"
      />
      {/* <p className="text-[44px] ">Acme</p> */}
    </div>
  );
}