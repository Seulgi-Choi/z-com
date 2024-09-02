import Link from "next/link";

export default function test1() {
  return (
    <>
      Test1 페이지
      <p>내용 추가 확인 test</p>
      <div>
        <Link href="/home">home으로 이동</Link>
      </div>
    </>
  );
}
