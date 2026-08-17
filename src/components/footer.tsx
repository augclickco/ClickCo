src/components/footer.tsx              <Mail size={15} />
              clickco@zohomail.in
            </a>
          </div>

          <div className="flex gap-6 text-sm text-muted">
            <Link href="/work" className="hover:text-foreground">Work</Link>
            <Link href="/services" className="hover:text-foreground">Services</Link>
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ClickCo. All rights reserved.</p>
          <p>Logos that last. Websites that work.</p>
        </div>
      </div>
    </footer>
  );
}
