import { Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
function NavLink({ to, name, onClose, ...rest }) {
  const location = useRouter();
  const isActive = location.pathname === to;
  const blogUrl = "https://blog.utsavbhattarai.info.np/";

  return (
    <Link href={name == "Blog" ? blogUrl : to} passHref>
      <Button
        as="a"
        rounded={"md"}
        variant={isActive ? "outline" : "ghost"}
        colorScheme={isActive ? "blue" : "grey"}
        size="sm"
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.100","gray.600"),
        }}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}

export default NavLink;
