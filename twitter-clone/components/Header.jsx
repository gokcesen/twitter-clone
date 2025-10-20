import Link from "next/link";

const Header = () => {
    return(
        <header className="mb-5">
            <nav className="container px-4 py-2 flex justify-between item-center">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                </ul>
            </nav>

        </header>
    );

}

export default Header;