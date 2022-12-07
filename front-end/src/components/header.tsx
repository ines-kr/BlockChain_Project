import { Box, HStack, IconButton, Image } from "native-base";
import { Pressable } from "react-native";
import { useNavigate } from "react-router";
import { Links } from "./links";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HStack
      px={4}
      h="82px"
      alignItems="center"
      borderBottomWidth={"1"}
      borderBottomColor="blueGray.500"
      position={"sticky"}
      bg="blueGray.800"
      top="0"
      zIndex={10}>
      <Pressable onPress={() => navigate("/")}>
        <Image
          size={{ base: "90", md: "60" }}
          resizeMode={"contain"}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/fr/7/74/Logo_biat_2019.jpg",
          }}
          alt="Logo"
        />
      </Pressable>
      <Box ml="auto" display={["none", "block"]}>
        <Links />
      </Box>
      <IconButton
        p="0"
        mt="1.5"
        ml="auto"
        display={["block", "none"]}
        onPress={() => setShowMenu(true)}
        icon={<FcMenu style={{ color: "#fff" }} size="30" />}
      />
      {showMenu && <MobileNav setShowMenu={setShowMenu} />}
    </HStack>
  );
}
