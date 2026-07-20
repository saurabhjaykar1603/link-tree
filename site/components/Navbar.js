import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(() => {
    setMobileMenuOpen(false);
    setLoggedIn(!!localStorage.getItem("LinkTreeToken"));
  }, [router.asPath]);

  const handleLogout = () => {
    localStorage.removeItem("LinkTreeToken");
    setLoggedIn(false);
    router.push("/login");
  };

  const links = loggedIn
    ? [
        { href: "/", label: "Home", color: "bg-[#FFD93D]" },
        { href: "/dashbord", label: "Dashboard", color: "bg-[#4ECDC4]" },
      ]
    : [
        { href: "/", label: "Home", color: "bg-[#FFD93D]" },
        { href: "/apply", label: "Register", color: "bg-[#FF8FAB]" },
        { href: "/login", label: "Login", color: "bg-[#A5D8FF]" },
      ];

  return (
    <nav className="bg-[#fdf6e3] border-b-[3px] border-[#1a1a2e] sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="bg-[#FFD93D] border-[3px] border-[#1a1a2e] rounded-xl p-1.5 shadow-[3px_3px_0_#1a1a2e] group-hover:-rotate-12 transition-transform duration-300">
            <img src="/images/favicon.ico" className="h-6 w-6" alt="LinkTree Logo" />
          </span>
          <span className="self-center text-2xl font-extrabold text-[#1a1a2e] tracking-tight">
            Link<span className="text-[#7c3aed]">Tree</span>
          </span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="toon-btn inline-flex items-center p-2 md:hidden bg-white text-[#1a1a2e]"
          aria-controls="navbar-default"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${mobileMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-bold flex flex-col gap-3 p-4 mt-4 md:mt-0 md:p-0 md:flex-row md:items-center md:gap-4 border-[3px] border-[#1a1a2e] rounded-2xl bg-white shadow-[5px_5px_0_#1a1a2e] md:border-0 md:bg-transparent md:shadow-none">
            {links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block text-center px-4 py-1.5 rounded-xl border-[3px] border-[#1a1a2e] text-[#1a1a2e] transition-all duration-150 ${
                      active
                        ? `${link.color} shadow-[3px_3px_0_#1a1a2e]`
                        : "bg-white hover:shadow-[3px_3px_0_#1a1a2e] hover:-translate-y-0.5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            {loggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full md:w-auto block text-center px-4 py-1.5 rounded-xl border-[3px] border-[#1a1a2e] font-bold bg-[#FF8FAB] text-[#1a1a2e] transition-all duration-150 hover:shadow-[3px_3px_0_#1a1a2e] hover:-translate-y-0.5"
                >
                  Logout 👋
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
