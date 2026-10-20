export default function home() {
  return (
<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/project.jpeg" alt="" width="384" height="512" />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="text-sm text-slate-500 dark:text-slate-400">
      <div>
        Awais Zahid
      </div>
      <div>
        geologist and Researcher, CRL University of Sargodha
      </div>
    </figcaption>
  </div>
</figure>
  );
}