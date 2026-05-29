import { Zap, ShieldCheck, ImageIcon, Film, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Download',
    description: 'Paste a link and get your media in seconds. No waiting, no queue.',
  },
  {
    icon: ShieldCheck,
    title: 'No Sign-up Required',
    description: 'Completely free and anonymous. We never store your data or links.',
  },
  {
    icon: Film,
    title: 'High-Quality Video',
    description: 'Choose from multiple resolutions up to the original upload quality.',
  },
  {
    icon: ImageIcon,
    title: 'Photos & Carousels',
    description: 'Download single photos or full Instagram carousel posts with ease.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works seamlessly on all devices. Installable as a PWA for quick access.',
  },
  {
    icon: Globe,
    title: 'Any Public Post',
    description: 'Works on any publicly accessible post from Instagram or X (Twitter).',
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto pt-16 pb-12">
      {/* Section header */}
      <div className="text-center mb-12 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-steel-gray font-inter">
          Why GrabIt
        </p>
        <h2 className="text-3xl font-heading font-bold tracking-tight text-ink-black">
          Everything you need. Nothing you don't.
        </h2>
      </div>

      {/* Feature grid - Dub.co cell layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-cloud-gray bg-cloud-gray rounded-xl overflow-hidden shadow-subtle">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-6 sm:p-8 flex flex-col gap-4 hover:bg-ash-gray/60 transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-cloud-gray bg-ash-gray text-jet-black group-hover:border-ember-glow/30 group-hover:text-ember-glow transition-colors">
              <feature.icon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-jet-black mb-1.5 font-inter">{feature.title}</h3>
              <p className="text-xs text-steel-gray leading-relaxed font-inter">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
