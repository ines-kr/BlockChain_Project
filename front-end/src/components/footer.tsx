import { HStack, Link } from "native-base";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "./style.css";

export function Footer() {
  return (
    <HStack
      p={4}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between">
      <HStack space={3} justifyContent={{ base: "center" }}>
        <Link
          href="https://geekyants.com/"
          isExternal
          textDecorationLine="none"
          _text={{
            color: "danger.500",
            fontWeight: "medium",
            fontSize: "xs",
          }}>
          Terms and conditions
        </Link>
        <Link
          href="https://geekyants.com/"
          isExternal
          _text={{
            color: "danger.500",
            fontWeight: "medium",
            fontSize: "xs",
          }}
          textDecorationLine="none">
          Privacy Policy
        </Link>
      </HStack>
    
    </HStack>
  );
}
