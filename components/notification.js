import Image from "next/image";

export default function Notification() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-neutral-900 rounded-xl shadow-lg flex items-center space-x-4 outline-none ring ring-white">
      <div className="shrink-0">
        <Image className="h-12 w-12" src="" alt="ChitChat Logo"></Image>
      </div>
      <div>
        <div className="text-xl font-medium text-white">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}