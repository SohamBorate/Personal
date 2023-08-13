import Image from "next/image";

export default function Notification() {
  return (
    <div class="p-6 max-w-sm mx-auto dark:bg-neutral-900 rounded-xl shadow-lg flex items-center space-x-4">
      <div class="shrink-0">
        <Image class="h-12 w-12" src="" alt="ChitChat Logo"></Image>
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}