import Link from 'next/link'

export default function PrimaryNav({

}) {
  return (
    <nav>
    <Link href='/'><a>Home</a></Link>
    <Link href='/movies'><a>Movies</a></Link>
    </nav>
  )
}
