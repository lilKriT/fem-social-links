import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex justify-center items-center py-24">
      <div className="flex flex-col justify-center items-center bg-gray-800 p-12 rounded-xl gap-4">
        <Image
          src="/avatar-jessica.jpeg"
          width={176}
          height={176}
          alt="Jessica Avatar"
          className="rounded-full w-28"
        />
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl">Jessica Randall</h1>
          <h2 className="text-green">London, United Kingdom</h2>
        </div>

        <p>"Front-end developer and avid reader."</p>

        <ul className="w-full flex flex-col gap-4">
          <li>
            <Link rel="stylesheet" href="#" className="social--link">
              GitHub
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="#" className="social--link">
              Frontend Mentor
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="#" className="social--link">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="#" className="social--link">
              Twitter
            </Link>
          </li>
          <li>
            <Link rel="stylesheet" href="#" className="social--link">
              Instagram
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
