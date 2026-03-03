export default function Footer() {
  return (
    <footer className="bg-[var(--bg-surface)] pt-20 pb-12 border-t border-[var(--border)] mt-24 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOUnmQzjX4883e4wJfa9LZMiEF791g7x4Akcvu8CS4ylVNIpoNk6wtAXtwPiwhImIgXCshziBTJnntcKBQSRWGDey9rypEOveoqv33dTZxPiMTPrTpTdk1xki4cc1hn0wEAf-TyxBGFf4ccsPfWw3WH=w1260-h366-s-no-gm?authuser=0" 
                alt="333 Live" 
                className="h-10 w-auto" 
                referrerPolicy="no-referrer"
              />
              <span className="font-normal text-[var(--text-secondary)]">x ZipRecruiter</span>
            </a>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs leading-relaxed">
              A strategic partnership proposal to rebuild the small business workforce, one hire at a time.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-wider text-[var(--text-tertiary)] font-bold">Navigation</h4>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#show" className="hover:text-white transition-colors">The Show</a></li>
              <li><a href="#hiring" className="hover:text-white transition-colors">Hiring Story</a></li>
              <li><a href="#sponsorship" className="hover:text-white transition-colors">Sponsorship</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm uppercase tracking-wider text-[var(--text-tertiary)] font-bold">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><a href="mailto:support@launchnow.today" className="hover:text-white transition-colors">support@launchnow.today</a></li>
              <li className="mt-2">Burlington, NC</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-[var(--text-tertiary)] gap-4">
          <p>&copy; 2026 3Thirty3 Live. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Confidential Proposal</span>
            <span>Not an Offer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
