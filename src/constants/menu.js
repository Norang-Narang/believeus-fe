import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineHandshake, MdOutlineDescription } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { PATH } from "./path";

export const NAV_ITEMS = [
  {
    id: "home",
    label: "홈",
    icon: <GoHome size={18} />,
    path: PATH.HOME,
  },
  {
    id: "matching",
    label: "매칭",
    icon: <MdOutlineHandshake size={18} />,
    path: PATH.MATCHING,
  },
  {
    id: "work-condition",
    label: "근무조건",
    icon: <MdOutlineMarkChatUnread size={18} />,
    path: PATH.WORK_CONDITION,
  },
  {
    id: "mypage",
    label: "마이페이지",
    icon: <FaRegCircleUser size={18} />,
    path: PATH.MY_PAGE,
  },
];
