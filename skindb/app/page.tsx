import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex items-center justify-center h-screen m-3 p-4">
        Welcome to SkinDB! This is a database for CS:GO skins. You can view collection and search for skins.
      </div>
    </div>
  );
}
