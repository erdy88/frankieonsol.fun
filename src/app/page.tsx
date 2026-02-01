import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Twitter, Send, LineChart } from 'lucide-react';
import { CopyButton } from '@/components/copy-button';

const memeImages = PlaceHolderImages.filter((img) => img.id.startsWith('meme'));
const contractAddress = 'FRffKsosdPkYJGdvUzF1moaLSuTfC2rkUCJqsLCdQgwf';
const pumpFunLink = `https://www.pump.fun/${contractAddress}`;

const socialLinks = {
  telegram: 'http://t.me/FRANKIETHECTO',
  twitter: 'https://twitter.com/i/communities/2017258551631102306',
  dexscreener:
    `https://dexscreener.com/solana/${contractAddress}`,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl supports-[backdrop-filter]:bg-black/30">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image src="https://i.ibb.co/mrTf3GwP/logo.jpg" alt="Frankie Logo" width={40} height={40} className="rounded-full" />
            <span className="font-headline text-2xl text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
              FRANKIE
            </span>
          </a>
          <nav className="flex items-center gap-2">
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Telegram" className="rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Send className="h-5 w-5" />
              </Button>
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Twitter" className="rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Button>
            </a>
            <a
              href={socialLinks.dexscreener}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="DexScreener" className="rounded-full text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-110">
                <LineChart className="h-5 w-5" />
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
              className="object-cover opacity-20 blur-md"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
          </div>
          <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-headline text-5xl md:text-7xl tracking-tighter font-normal text-white drop-shadow-[0_4px_8px_rgba(255,255,255,0.3)]">
                Frankie The <span className="text-white">CTO</span>n.
              </h1>
              <p className="max-w-[600px] text-lg text-white/70">
                Kevin Gill's potential dog. A dog-themed coin with legs to follow!
                Ready to bark its way to the moon.
              </p>
            </div>
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:mx-0 lg:max-w-none group">
               <div className="absolute -inset-8 bg-white/20 rounded-full blur-3xl opacity-50 transition-all duration-1000 group-hover:opacity-70 group-hover:blur-4xl group-hover:-inset-4"></div>
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
            <h2 className="font-headline text-4xl md:text-5xl mb-8 text-white drop-shadow-[0_3px_6px_rgba(255,255,255,0.2)]">
              About $FRANKIE
            </h2>
            <div className="text-left space-y-4 bg-black/50 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:shadow-white/20 hover:ring-white/20 hover:-translate-y-2 hover:shadow-lg hover:ring-opacity-30">
              <p className="text-lg text-white/90">
                On Instagram, Kevin Gill follows Rachel Gill Byron. They share the same surname, so she might be his sister. This is speculation, not a confirmed relationship. Her public posts reference a dog named “Frankie.”
              </p>
              <p className="text-lg text-white/90">
                Kevin Gill, known for Barking Puppy, already has a dog-themed coin that reached around a ~$7m valuation. That alone shows the market has appetite for this narrative.
              </p>
              <p className="text-lg text-white/90">
                $FRANKIE is a clean continuation of that meta. A public social breadcrumb, a familiar dog theme, now tokenized on-chain.
              </p>
              <p className="text-lg text-white/90">
                No claim of endorsement or affiliation. This is simply a visible social trail paired with an on-chain experiment. DYOR.
              </p>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="py-20 md:py-32">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 text-white drop-shadow-[0_3px_6px_rgba(255,255,255,0.2)]">
              Tokenomics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-black/50 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-white/20 hover:ring-white/20 border-none hover:shadow-lg hover:ring-opacity-30">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
                    Total Supply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                    1,000,000,000
                  </p>
                  <p className="text-white/70">$FRANKIE</p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-white/20 hover:ring-white/20 border-none hover:shadow-lg hover:ring-opacity-30">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
                    Contract Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center p-3 bg-black/20 rounded-md text-sm md:text-base break-all">
                    <p className="font-code text-white/90">{contractAddress}</p>
                  </div>
                  <CopyButton textToCopy={contractAddress} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-to-buy" className="py-20 md:py-32">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-4 text-white drop-shadow-[0_3px_6px_rgba(255,255,255,0.2)]">
              Three Steps to Join The Pack
            </h2>
            <p className="text-white/70 mb-12 max-w-2xl mx-auto">
              Always double-check official links and contract addresses. Move only what you can afford to risk.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              <Card className="bg-black/50 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-white/20 hover:ring-white/20 border-none hover:shadow-lg hover:ring-opacity-30 p-6 flex flex-col">
                <div className="flex-grow">
                  <p className="text-sm font-bold text-white/90 mb-2">STEP 1</p>
                  <CardTitle className="font-headline text-2xl mb-4 text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">Set up your wallet</CardTitle>
                  <p className="text-white/70 mb-6">Download Phantom or Solflare. Follow the dev's X and join the community for updates.</p>
                </div>
                <Button asChild size="lg" className="bg-white/90 hover:bg-white text-black transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-white/40 rounded-full w-full mt-auto font-bold">
                  <a href={pumpFunLink} target="_blank" rel="noopener noreferrer">Buy on Pump.fun</a>
                </Button>
              </Card>
              
              <Card className="bg-black/50 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-white/20 hover:ring-white/20 border-none hover:shadow-lg hover:ring-opacity-30 p-6 flex flex-col">
                <div className="flex-grow">
                  <p className="text-sm font-bold text-white/90 mb-2">STEP 2</p>
                  <CardTitle className="font-headline text-2xl mb-4 text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">Get SOL ready</CardTitle>
                  <p className="text-white/70 mb-6">Fund your wallet with SOL. Always verify the contract address before any swap.</p>
                </div>
                 <CopyButton textToCopy={contractAddress} />
              </Card>

              <Card className="bg-black/50 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-white/20 hover:ring-white/20 border-none hover:shadow-lg hover:ring-opacity-30 p-6 flex flex-col">
                <div className="flex-grow">
                  <p className="text-sm font-bold text-white/90 mb-2">STEP 3</p>
                  <CardTitle className="font-headline text-2xl mb-4 text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">Swap for $FRANKIE</CardTitle>
                  <p className="text-white/70 mb-6">Head to Pump.fun, paste the CA, and join the pack. Welcome to the pack!</p>
                </div>
                <Button asChild size="lg" className="bg-white/90 hover:bg-white text-black transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-white/40 rounded-full w-full mt-auto font-bold">
                  <a href={pumpFunLink} target="_blank" rel="noopener noreferrer">Join the pack</a>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section id="memes" className="py-20 md:py-32 bg-white/5">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 text-white drop-shadow-[0_3px_6px_rgba(255,255,255,0.2)]">
              Meme Gallery
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
              {memeImages.map((meme) => (
                <div
                  key={meme.id}
                  className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-white/25 hover:scale-105"
                >
                  <Image
                    src={meme.imageUrl}
                    alt={meme.description}
                    data-ai-hint={meme.imageHint}
                    width={meme.width || 500}
                    height={meme.height || 500}
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm">{meme.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="py-20 md:py-32">
          <div className="container text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-12 text-white drop-shadow-[0_3px_6px_rgba(255,255,255,0.2)]">
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
                  className="bg-black/50 backdrop-blur-2xl rounded-3xl shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-white/20 hover:ring-white/20 border-none hover:shadow-lg hover:ring-opacity-30 overflow-hidden"
                >
                  <iframe
                    src={`https://www.instagram.com/p/${reelId}/embed`}
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
            <h2 className="font-headline text-4xl md:text-5xl mb-8 text-white drop-shadow-[0_3px_6px_rgba(255,255,255,0.2)]">
              Join The Pack!
            </h2>
            <p className="text-lg text-white/70 mb-12">
              Follow us on our socials to stay updated with the latest barks and
              woofs about $FRANKIE.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button
                asChild
                size="lg"
                className="bg-white/90 hover:bg-white text-black font-bold transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-white/40 rounded-full"
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
                className="bg-white/90 hover:bg-white text-black font-bold transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-white/40 rounded-full"
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
                className="bg-white/90 hover:bg-white text-black font-bold transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-white/40 rounded-full"
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
        <div className="container text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Frankie the CTOn. All rights
            reserved.{' '}
          </p>
          <p className="text-xs text-white/40 mt-4 max-w-3xl mx-auto">
            Disclaimer: This content is for informational and entertainment purposes only and reflects personal speculation based on publicly available information. NFA. Investing in memecoins is highly risky and volatile and may result in the partial or total loss of your investment. Always do your own research and only risk what you can afford to lose.
          </p>
        </div>
      </footer>
    </div>
  );
}
