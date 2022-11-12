import { Heading } from "@chakra-ui/react"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href={'/'}>
      <Heading size={'sm'}>francocampaiola.</Heading>
    </Link>
  )
}
