import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/profile.jpeg'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me
      </h1>
      <div className="grid sm:grid-cols-2 gap-3 grid-cols-1 justify-items-center sm:justify-items-start">
        <div className="grid-span-1 sm:grid-span-1">
          <Image src={profilePic} alt="Jayson Kadlecek" className="rounded-full mb-4" width={200} height={200}/>
        </div>
        <div className="grid-span-4 sm:text-justify sm:grid-span-1">
          <p className="mb-4">
            {`I'm Jayson Kadlecek (pronounced Jay-son Cad-luh-check) and I love to build things. My day job is as a Senior Product Manager at Zapier, where I work on our core workflow "Runner" product.
            I also like to scratch my coding itch by building side projects and writing about my experiences. My most recent fun project is `}
              <Link 
              href="https://www.bartrivia.ai" 
              target="_blank"
              className="underline underline-offset-4 underline-thickness-2 hover:text-blue-600 dark:hover:text-blue-400"
              >BarTrivia.ai</Link>
            {`, a trivia game for bars and restaurants that leverages AI to make hosting trivia nights easier.`}
          </p>
          <p>
            And, if that didn&apos;t take up enough time, I&apos;m also a part-time farmer in Corralitos, CA (<Link href="https://www.instagram.com/corralitoshillsfarm" className="underline underline-offset-4 underline-thickness-2 hover:text-blue-600 dark:hover:text-blue-400" target='_blank'>@corralitoshillsfarm</Link>), 
             opening a pumpkin patch this fall.
          </p>
        </div>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
