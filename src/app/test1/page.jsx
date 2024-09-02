import Link from "next/link";

export default function test1() {
  return (
    <>
      Test1 페이지
      <div>
        <Link href="/home">home으로 이동</Link>
      </div>
    </>
  );
}
