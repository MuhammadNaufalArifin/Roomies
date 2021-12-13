import { NextPage } from "next";
import Menubar from "../components/Menu/Menubar";
import Navbar from "../components/Nav/Navbar";

export default function HomePage(){
  return (
    <div>
      <Navbar/>
      <Menubar/>
    </div>
  )
}