import NavLink from "./NavLink";
import { UserButton, auth } from "@clerk/nextjs";
export default function NavBar() {
  const { userId } = auth();

  if (userId) {
    return (<nav>
      <ul className="flex gap-2">
        <li className="font-bold font-orbitron">
          <NavLink href="/">
            NextJS
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink href="/profile" prefetch={false}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
        <li>
          <UserButton afterSignOutUrl="/sign-in" />
        </li>
      </ul>
    </nav>
    );
  } else {
    return <nav>
      <ul className="flex gap-2">
        <li className="font-bold font-orbitron">
          <NavLink href="/">
            NextJS
          </NavLink>
        </li>
      </ul>
    </nav>
  }


}
