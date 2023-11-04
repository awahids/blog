import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 mt-1 text-sm font-bold uppercase text-blue-600 underline-offset-4 hover:text-zinc-900 hover:underline hover:decoration-wavy dark:text-sky-500 dark:hover:text-sky-800 md:text-base"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
