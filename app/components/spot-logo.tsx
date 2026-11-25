import Image from "next/image";

export default function SpotLogo() {
  return (
    <a className="spot-logo" href="#top" aria-label="SPOT Inverter Repairs home">
      <Image
        src="/spot-logo.png"
        alt=""
        width={480}
        height={195}
        className="spot-logo-image"
      />
    </a>
  );
}
