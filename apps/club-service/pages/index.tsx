import { Component as Globe } from '../components/ui/InteractiveGlobe';

const Demo = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-5xl rounded-2xl border border-border bg-card overflow-hidden relative">
        {/* Ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Баруун талын контент */}
          <div className="flex-1 flex flex-col justify-center p-10 md:p-14 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground mb-6 w-fit">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Бүх системүүд хэвийн
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              Backend-д
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                тавтай морилно уу
              </span>
            </h1>

            <div className="mb-8">
              <a
                href="https://studio.apollographql.com/sandbox/explorer?endpoint=https://105-ochko-need-new-branch.cloudflare-pine-club.pages.dev/api/graphql"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white"
              >
                Apollo Sandbox руу орох
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-foreground">150+</p>
                <p className="text-xs text-muted-foreground">Edge Node-ууд</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">&lt;50ms</p>
                <p className="text-xs text-muted-foreground">Дундаж хоцролт</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">99.99%</p>
                <p className="text-xs text-muted-foreground">Үйлчилгээний тасралтгүй байдал</p>
              </div>
            </div>
          </div>

          {/* Зүүн тал — Дэлхий */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-0 min-h-[400px]">
            <Globe size={460} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
