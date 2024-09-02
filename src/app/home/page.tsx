import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      배포 테스트하기
      <div>
        <Link href="/test1">test1로 이동</Link>
      </div>
    </>
  );
}
