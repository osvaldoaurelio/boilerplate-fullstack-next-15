import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

type UserAvatarProps = {
  image?: string | null;
  name?: string | null;
}

export function UserAvatar({ image, name }: UserAvatarProps) {
  const avatarInitials = name?.split(" ")
    .map(([initial]) => initial)
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <Avatar>
      <AvatarImage src={image ?? ''} alt={name ?? ''} />
      <AvatarFallback className="font-bold">{avatarInitials || 'A'}</AvatarFallback>
    </Avatar>
  );
}
