import type { IUser } from "@/models/IUser";
import { fetchData } from "@/utils/fetchData";
import { Avatar } from "@heroui/react";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

const StoryList = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  useEffect(() => {
    const init = async () => {
      const users = await fetchData<IUser[]>("user_list.json");
      setUserList(users);
    };
    init();
  }, []);

  return (
    <div className="flex justify-center gap-14">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="relative">
          <Avatar
            className="w-16 h-16"
            isBordered
            color="default"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <div className="absolute -right-2 -bottom-2 border-2 border-white bg-sky-600 text-white rounded-full p-1">
            <Plus size={18} />
          </div>
        </div>
        <span className="text-sm font-semibold">You</span>
      </div>
      {userList.length
        ? userList.map((user) => (
            <div
              key={user.id}
              className="flex flex-col justify-center items-center gap-3"
            >
              <Avatar
                className="w-16 h-16"
                isBordered
                color="secondary"
                src={user.url}
              />
              <span className="text-sm font-semibold">{user.name}</span>
            </div>
          ))
        : "Loading"}
    </div>
  );
};

export default StoryList;
