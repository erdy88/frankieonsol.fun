import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Send } from 'lucide-react';
import { CopyButton } from '@/components/copy-button';

const memeImages = PlaceHolderImages.filter((img) => img.id.startsWith('meme'));
const contractAddress = 'F8dgv9rSGQJQFUjNktHeGKsJjvfmn7HHutZLoApqpump';

const socialLinks = {
  telegram: 'http://t.me/FRANKIETHECTO',
  twitter: 'https://twitter.com/i/communities/2017258551631102306',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image src="https://i.ibb.co/mrTf3GwP/logo.jpg" alt="Frankie Logo" width={40} height={40} className="rounded-full" />
            <span className="font-headline text-2xl text-foreground">
              FRANKIE
            </span>
          </a>
          <nav className="flex items-center gap-2">
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Telegram">
                <Send className="h-5 w-5 text-accent" />
              </Button>
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-accent" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
          <div className="flex flex-col gap-6">
            <h1 className="font-headline text-5xl md:text-7xl tracking-tighter">
              Frankie The <span className="text-primary">CTO</span>n.
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Kevin Gill's potential dog. A dog-themed coin with legs to follow!
              Ready to bark its way to the moon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-accent/40"
              >
                <a
                  href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=F8dgv9rSGQJQFUjNktHeGKsJjvfmn7HHutZLoApqpump"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy $FRANKIE
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="transform transition-transform duration-300 hover:scale-105">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] max-w-lg mx-auto lg:mx-0 lg:max-w-none">
            <Image
                src="https://i.ibb.co/mrTf3GwP/logo.jpg"
                alt="Frankie the CTOn"
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
          </div>
        </section>

        <section id="about" className="py-20 md:py-32">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-8">
              About $FRANKIE
            </h2>
            <div className="text-left space-y-4 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl ring-1 ring-white/20">
              <p className="text-lg text-foreground">
                On Instagram, Kevin Gill follows Rachel Gill Byron. Same
                surname, so she might be his sister (speculation). Her public
                posts reference a dog named “Frankie”.
              </p>
              <p className="text-lg text-foreground">
                Kevin Gill (the real CTO, Chief Trading Officer) already has a
                dog-themed coin valued around ~$7m.
              </p>
              <p className="text-xl font-bold text-primary">
                $FRANKIE has legs to follow!
              </p>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="py-20 md:py-32">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12">
              Tokenomics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    Total Supply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">
                    1,000,000,000
                  </p>
                  <p className="text-muted-foreground">$FRANKIE</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    Contract Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center p-3 bg-muted rounded-md text-sm md:text-base break-all">
                    <p className="font-code">{contractAddress}</p>
                  </div>
                  <CopyButton textToCopy={contractAddress} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="memes" className="py-20 md:py-32 bg-secondary/50">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12">
              Meme Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {memeImages.map((meme) => (
                <div
                  key={meme.id}
                  className="aspect-square relative group overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={meme.imageUrl}
                    alt={meme.description}
                    data-ai-hint={meme.imageHint}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="socials" className="py-20 md:py-32">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl mb-8">
              Join The Pack!
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Follow us on our socials to stay updated with the latest barks and
              woofs about $FRANKIE.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-accent/40"
              >
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="mr-2" /> Telegram
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-accent/40"
              >
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2" /> Twitter
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t">
        <div className="container text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Frankie the CTOn. All rights
            reserved.{' '}
          </p>
        </div>
      </footer>
    </div>
  );
}
