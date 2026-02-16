import Link from "next/link";

const menuConfig = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "Test CRUD", href: "/test-crud" },
];

const MenuItem: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => (
  <Link href={href} className="text-gray-700 hover:text-blue-600">
    {title}
  </Link>
);
export const TopMenu: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-4">
        {menuConfig.map((item) => (
          <li key={item.href}>
            <MenuItem title={item.title} href={item.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
