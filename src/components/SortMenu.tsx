import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortMenu = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSort = useGameQueryStore((s) => s.setSort);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const order = sortOrders.find((order) => order.value === sortOrder)?.label;

  return (
    <Menu>
      <MenuButton
        as={Button}
        fontSize={{ base: "14px", md: "md" }}
        padding={{ base: 2, md: 4 }}
        rightIcon={<BsChevronDown />}
      >
        Order by:{" "}
        {window.innerWidth < 500 && order && order?.length > 10
          ? order.slice(0, 6) + "..."
          : order || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSort(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortMenu;
