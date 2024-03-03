import Image from 'next/image'
import Link from 'next/link'
import Logo from './nivesti.png'

const Navbar = () => {
    return ( 
        <nav>
            <Image 
                src={Logo}
                alt='Niveksti Helpdesk Logo'
                width={50}
                quality={100}
                placeholder='blur'
            />
            <h1>Niveksti Helpdesk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets ">Tickets</Link>
            <Link href="/tickets/create ">Create ticket</Link>
        </nav>
    );
}
 
export default Navbar; 