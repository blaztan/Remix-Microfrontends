import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (Host)</h1>
      <ul>
        <li>
          <Link to="/host">
            HOST
          </Link>
        </li>
        <li>
          <Link to="/remote/blog">
            REMOTE
          </Link>
        </li>
      </ul>
    </div>
  );
}
