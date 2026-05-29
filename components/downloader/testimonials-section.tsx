import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    handle: 'sarah_creates',
    role: 'Content Creator',
    initials: 'SJ',
    avatarBg: 'bg-primary/10 text-primary',
    content: "GrabIt has completely replaced all the shady, ad-filled downloader sites I used to use. It's clean, fast, and works perfectly on my iPhone without redirects.",
    rating: 5,
  },
  {
    name: 'Alex Rivera',
    handle: 'alexr_dev',
    role: 'Social Media Manager',
    initials: 'AR',
    avatarBg: 'bg-ember-glow/10 text-ember-glow',
    content: "The PWA support is a game-changer. I installed it on my home screen and now I can download Twitter videos instantly for my curation clients. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    handle: 'elena_design',
    role: 'UI Designer',
    initials: 'ER',
    avatarBg: 'bg-ink-black/5 text-ink-black',
    content: "No retro neon layouts or download buttons redirecting to spam. GrabIt's minimal design, lack of ads, and direct downloads are so refreshing for a modern web utility.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 border-t border-cloud-gray">
      {/* Section header */}
      <div className="text-center mb-12 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-steel-gray font-inter">
          Testimonials
        </p>
        <h2 className="text-3xl font-heading font-bold tracking-tight text-ink-black">
          Loved by creators worldwide.
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.handle}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-cloud-gray bg-white/50 backdrop-blur-sm hover:border-cool-gray hover:bg-white/80 transition-all duration-300 group"
          >
            <div>
              {/* Stars Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xs text-steel-gray leading-relaxed font-inter italic mb-6">
                "{t.content}"
              </p>
            </div>

            {/* Profile info */}
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-inter text-xs ${t.avatarBg}`}>
                {t.initials}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-jet-black font-inter flex items-center gap-1">
                  {t.name}
                  {/* Verified Badge */}
                  <svg className="w-3.5 h-3.5 text-primary fill-current" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </h4>
                <p className="text-[10px] text-steel-gray font-inter">
                  @{t.handle} • {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
