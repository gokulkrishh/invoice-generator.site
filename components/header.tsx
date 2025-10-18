import Link from 'next/link'

import { LogoIcon } from './icons'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Button className="px-2" asChild variant="ghost">
        <Link href="/">
          <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter">
            <LogoIcon className="size-7" /> Invoice Generator
          </h1>
        </Link>
      </Button>
    </header>
  )
}

export default Header
