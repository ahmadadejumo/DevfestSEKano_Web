import { Hero } from "@/components/ui/Hero";
import { Collaborators } from "@/components/ui/Collaborators";
import { Submit } from "@/components/ui/Submit";
import { CountDown } from "@/components/ui/CountDown";
import { Hosts } from "@/components/ui/Hosts";
import Footer from "@/components/ui/Footer"
import {Invitation} from "@/components/ui/Invitation"
export const Home = () => {
  return (
    <div className='pt-[-10rem] h-screen w-full'>
      <Hero />
      <Collaborators />
      <Submit />
      <CountDown />
      <Hosts />
      <Invitation />
      <Footer />
    </div>
  )
}
