import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Send, LineChart } from 'lucide-react';
import { CopyButton } from '@/components/copy-button';

const memeImages = PlaceHolderImages.filter((img) => img.id.startsWith('meme'));
const contractAddress = 'F8dgv9rSGQJQFUjNktHeGKsJjvfmn7HHutZLoApqpump';

const socialLinks = {
  telegram: 'http://t.me/FRANKIETHECTO',
  twitter: 'https://twitter.com/i/communities/2017258551631102306',
  dexscreener:
    'https://dexscreener.com/solana/FRffKsosdPkYJGdvUzF1moaLSuTfC2rkUCJqsLCdQgwf',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/50 backdrop-blur-xl shadow-2xl supports-[backdrop-filter]:bg-background/30">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image src="https://i.ibb.co/mrTf3GwP/logo.jpg" alt="Frankie Logo" width={40} height={40} className="rounded-full" />
            <span className="font-headline text-2xl text-foreground drop-shadow-lg">
              FRANKIE
            </span>
          </a>
          <nav className="flex items-center gap-2">
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Telegram" className="hover:bg-white/10 rounded-full">
                <Send className="h-5 w-5 text-accent" />
              </Button>
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Twitter" className="hover:bg-white/10 rounded-full">
                <Twitter className="h-5 w-5 text-accent" />
              </Button>
            </a>
            <a
              href={socialLinks.dexscreener}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="DexScreener" className="hover:bg-white/10 rounded-full">
                <LineChart className="h-5 w-5 text-accent" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://i.ibb.co/mrTf3GwP/logo.jpg"
              alt="Frankie background"
              fill
              className="object-cover opacity-5 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/50" />
          </div>
          <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-headline text-5xl md:text-7xl tracking-tighter font-normal drop-shadow-2xl">
                Frankie The <span className="text-primary">CTO</span>n.
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Kevin Gill's potential dog. A dog-themed coin with legs to follow!
                Ready to bark its way to the moon.
              </p>
            </div>
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:blur-4xl"></div>
              <Image
                  src="https://i.ibb.co/mrTf3GwP/logo.jpg"
                  alt="Frankie the CTOn"
                  fill
                  priority
                  className="relative object-cover rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3"
                />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-8 drop-shadow-xl">
              About $FRANKIE
            </h2>
            <div className="text-left space-y-4 bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:shadow-primary/20 hover:ring-white/20 hover:-translate-y-2 hover:shadow-lg">
              <p className="text-lg text-foreground">
                On Instagram, Kevin Gill follows Rachel Gill Byron. They share the same surname, so she might be his sister. This is speculation, not a confirmed relationship. Her public posts reference a dog named “Frankie.”
              </p>
              <p className="text-lg text-foreground">
                Kevin Gill, known for Barking Puppy, already has a dog-themed coin that reached around a ~$7m valuation. That alone shows the market has appetite for this narrative.
              </p>
              <p className="text-lg text-foreground">
                $FRANKIE is a clean continuation of that meta. A public social breadcrumb, a familiar dog theme, now tokenized on-chain.
              </p>
              <p className="text-lg text-foreground">
                No claim of endorsement or affiliation. This is simply a visible social trail paired with an on-chain experiment. DYOR.
              </p>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="py-20 md:py-32">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 drop-shadow-xl">
              Tokenomics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:ring-white/20 border-none hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl drop-shadow-lg">
                    Total Supply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary drop-shadow-lg">
                    1,000,000,000
                  </p>
                  <p className="text-muted-foreground">$FRANKIE</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:ring-white/20 border-none hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl drop-shadow-lg">
                    Contract Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center p-3 bg-black/20 rounded-md text-sm md:text-base break-all">
                    <p className="font-code">{contractAddress}</p>
                  </div>
                  <CopyButton textToCopy={contractAddress} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="memes" className="py-20 md:py-32 bg-white/5">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 drop-shadow-xl">
              Meme Gallery
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
              {memeImages.map((meme) => (
                <div
                  key={meme.id}
                  className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/25"
                >
                  <Image
                    src={meme.imageUrl}
                    alt={meme.description}
                    data-ai-hint={meme.imageHint}
                    width={meme.width || 500}
                    height={meme.height || 500}
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm">{meme.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="py-20 md:py-32">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 drop-shadow-xl">
              Frankie on Instagram
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'DDQjtFttCZi',
                'DA4jutZtKt-',
                'DArwRMttWEE',
                'DAUWXTHNKGO',
                'C_j6BxNtRRv',
                'C_j3ywctjPP',
              ].map((reelId) => (
                <div
                  key={reelId}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20 hover:ring-white/20 border-none hover:shadow-lg overflow-hidden"
                >
                  <iframe
                    src={`https://www.instagram.com/reel/${reelId}/embed`}
                    width="100%"
                    height="480"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    allowFullScreen
                    className="w-full h-[480px]"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="socials" className="py-20 md:py-32">
          <div className="container text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl mb-8 drop-shadow-xl">
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-accent/40 rounded-full"
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-accent/40 rounded-full"
              >
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2" /> Twitter
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-accent/40 rounded-full"
              >
                <a
                  href={socialLinks.dexscreener}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LineChart className="mr-2" /> DexScreener
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-white/10">
        <div className="container text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Frankie the CTOn. All rights
            reserved.{' '}
          </p>
          <p className="text-xs text-muted-foreground/50 mt-4">
            Disclaimer: This content is for informational and entertainment purposes only and reflects personal speculation based on publicly available information. NFA. Investing in memecoins is highly risky and volatile and may result in the partial or total loss of your investment. Always do your own research and only risk what you can afford to lose.
          </p>
        </div>
      </footer>
    </div>
  );
}
