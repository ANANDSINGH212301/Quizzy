import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = () => {
  return (
    <Avatar className="w-10 h-10 ring-2 ring-purple-400 ring-offset-2 hover:scale-105 transition-transform shadow-sm">
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="Profile"
        className="object-cover"
      />
      <AvatarFallback className="bg-purple-500 text-white font-semibold">
        CN
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
