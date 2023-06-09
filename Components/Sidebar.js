import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={{ base: "20px", lg: "10px" }}>
      <ListItem>
        <Link href="dashboard">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </Link>
      </ListItem>
      <ListItem>
        <Link href="create">
          <ListIcon as={EditIcon} color="white" />
          New Task
        </Link>
      </ListItem>
      <ListItem>
        <Link href="profile">
          <ListIcon as={AtSignIcon} color="white" /> Profile
        </Link>
      </ListItem>
    </List>
  );
}
