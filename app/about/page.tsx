export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-heading text-3xl text-purple3">About Sigrún</h1>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/starrynight" alt="Portrait of Sigrún on starry background" className="w-full rounded-lg border border-white/10" />
        </div>
        <div className="md:col-span-2 text-white/80">
          <p>
            I’m Sigrún — an astrologer and lifelong student of the sky. My practice blends classical techniques with
            compassionate guidance to help you navigate change and purpose.
          </p>
          <p className="mt-3">
            I believe astrology is a language of timing and meaning. Whether you’re new to the craft or returning to it,
            my aim is to make it useful, grounded, and inspiring.
          </p>
        </div>
      </div>
    </div>
  )
}


