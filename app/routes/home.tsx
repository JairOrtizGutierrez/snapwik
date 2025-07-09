import { Avatar } from "@heroui/react";
import { Bell, Film, Heart, House, Search, Send } from "lucide-react";
import ReelGrid from "@/components/ReelGrid";
import StoryList from "@/components/StoryList";
import PostGrid from "@/components/PostGrid";
import { IconHome, IconHomeFilled } from "@tabler/icons-react";

export function meta() {
  return [
    { title: "Snapwik" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <header>
        <div className="flex justify-between items-center p-16">
          <div>Snapwik</div>
          <div className="flex gap-12">
            <House />
            {/* <IconHome stroke={1.5} size={30} /> */}
            {/* <IconHomeFilled stroke={1.5} size={30} /> */}
            <Search />
            <Film />
            <Heart />
          </div>
          <div className="flex justify-center items-center gap-8">
            {/* <Send /> */}
            <Bell />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto pb-10">
          <StoryList />
        </div>
      </header>
      <main>
        {/* <ReelGrid /> */}
        <PostGrid />
      </main>
    </div>
  );
}
