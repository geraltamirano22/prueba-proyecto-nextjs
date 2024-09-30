import { HeaderHome } from "@/components/home/HeaderHome/HeaderHome";
import { FirstViewHome } from "@/components/home/FirstViewHome/FirstViewHome";
import { MiddleCards } from "@/components/home/MiddleCards/MiddleCards";
import { SecondViewHome } from "@/components/home/SecondViewHome/SecondViewHome";
import { ThirdViewHome } from "@/components/home/ThirdViewHome/ThirdViewHome";

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
