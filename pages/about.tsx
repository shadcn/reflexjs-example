import { Layout } from "@/components/layout"
import Hero from "@/blocks/hero"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <Layout>
      <Hero heading="About Us" text="This is the about page" bg="muted" />
      <section py="16">
        <div variant="container">
          <div display="grid" col="2" gap="16">
            <div position="relative">
              <Image src="/images/placeholder.jpg" layout="fill" />
            </div>
            <div py="16">
              <h2 variant="heading.h2">Build something amazing</h2>
              <p fontSize="xl" my="6">
                Reiciendis quia totam esse. Dicta minus iusto quisquam doloribus
                temporibus.
              </p>
              <Link href="/" passHref>
                <a variant="button.primary.lg">Learn more</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
