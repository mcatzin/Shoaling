import { Menu, Container, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

function Nabbar() {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <Menu>
      <Container text>
        <Link href="/login">
          <Menu.item header active={isActive("/login")}>
            <Icon size="large" name="sign in" />
            Login
          </Menu.item>
        </Link>
        <Link href="/signup">
          <Menu.Item header active={isActive("/signup")}>
            <Icon size="large" name="signup" />
            Signup
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default Nabbar;
