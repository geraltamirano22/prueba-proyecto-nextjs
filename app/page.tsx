import { HeaderHome } from "@/components/home";
import { FirstViewHome } from "@/components/home";
import { MiddleCards } from "@/components/home";
import { SecondViewHome } from "@/components/home";
import { ThirdViewHome } from "@/components/home";

export default function Home() {
  return (
    <>
      <HeaderHome/>

      <main>
      
        <FirstViewHome/>

        <MiddleCards/>

        <SecondViewHome/>

        <ThirdViewHome/>

      </main>
    </>
  );
}
