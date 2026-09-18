import Image from "next/image";

export default function CsaBadge() {
  return (
    <a
      href="https://cloudsecurityalliance.org/ai-safety-initiative"
      target="_blank"
      rel="noopener noreferrer"
      className="block flex-none"
    >
      <Image
        src="/csa-ai-safety-supporter.webp"
        alt="CSA AI Safety Initiative Supporter, Cloud Security Alliance"
        width={801}
        height={801}
        className="h-28 w-28 rounded-lg"
      />
    </a>
  );
}
